extends Node3D

@export var normal_survival_time: float = 90.0

@export var normal_chase_speed: float = 4.8
@export var normal_attack_speed: float = 30.2

@export var level2_chase_speed: float = 5.8
@export var level2_attack_speed: float = 30.8

@onready var enemy: CharacterBody3D = $Enemy
@onready var player: CharacterBody3D = $Player

@onready var spawn: Node3D = $Spawn
@onready var spawn2: Node3D = $Spawn2
@onready var spawn3: Node3D = $Spawn3
@onready var spawn4: Node3D = $Spawn4
@onready var spawn5: Node3D = $Spawn5
@onready var spawn6: Node3D = $Spawn6
@onready var spawn7: Node3D = $Spawn7

@onready var level_music: AudioStreamPlayer = $LevelMusic
@onready var level_effects: CanvasLayer = $LevelEffects/CanvasLayer

@onready var first_person_button = $FirstPerson/FirstPerson
@onready var first_person_subtitle = $FirstPerson/Subtitle

var level_color: ColorRect
var extra_enemies: Array[CharacterBody3D] = []

var current_level: int = 0
var survival_timer: float = 120.0

var level2_extra_count: int = 1

var level_music_active: bool = false
var flickering: bool = false

var enemy_scene: PackedScene = preload("res://scenes/Enemy.tscn")


func _ready():

	randomize()

	level_effects.layer = 1

	level_color = ColorRect.new()
	level_color.name = "WorldColor"
	level_color.mouse_filter = Control.MOUSE_FILTER_IGNORE

	level_color.color = Color(
		1.0,
		1.0,
		1.0,
		0.0
	)

	level_effects.add_child(level_color)

	level_color.set_anchors_and_offsets_preset(
		Control.PRESET_FULL_RECT
	)

	var stamina_canvas = get_node_or_null("CanvasLayer")

	if stamina_canvas is CanvasLayer:
		stamina_canvas.layer = 0

	var death_canvas = get_node_or_null("CanvasLayer2")

	if death_canvas is CanvasLayer:
		death_canvas.layer = 10

	var clark_sound_canvas = get_node_or_null("ClarkSound")

	if clark_sound_canvas is CanvasLayer:
		clark_sound_canvas.layer = 20

	var clark_sound_button = get_node_or_null(
		"ClarkSound/VBoxContainer/ClarkSound"
	)

	if clark_sound_button is Control:
		clark_sound_button.z_index = 100

	if first_person_button is Control:
		first_person_button.z_index = 100

	if first_person_subtitle is Control:
		first_person_subtitle.z_index = 100

	level_music.stop()
	level_music.volume_db = 0.0

	setup_enemy_normal(enemy)

	current_level = 0
	survival_timer = normal_survival_time

	level2_extra_count = 1

	print("NORMAL MODE")
	print("Survive ", normal_survival_time, " seconds.")


func _process(delta):

	# =================================
	# HIDE FIRST PERSON UI WHEN DEAD
	# =================================

	if player and player.is_dead:

		if first_person_button.visible:
			first_person_button.hide()

		if first_person_subtitle.visible:
			first_person_subtitle.hide()


	# =================================
	# LEVEL SYSTEM
	# =================================

	if current_level == 2:

		if level_music_active:

			if not level_music.playing:

				finish_level()

		return

	survival_timer -= delta

	if survival_timer <= 0.0:

		start_level_2()


func start_level_2():

	current_level = 2

	print("")
	print("==============================")
	print("LEVEL 2 STARTED")
	print("==============================")
	print("EXTRA CLARKS: ", level2_extra_count)
	print("TOTAL CLARKS: ", level2_extra_count + 1)

	level_music.stop()
	level_music_active = false

	var music: AudioStream = load(
		"res://audio/level2_music.mp3"
	)

	if music != null:

		level_music.stream = music
		level_music.volume_db = 0.0
		level_music.play()

		level_music_active = true

	else:

		print("ERROR: level2_music.mp3 not found.")

	level_color.color = Color(
		0.45,
		0.008,
		0.008,
		0.30
	)

	clear_extra_enemies()

	setup_enemy_level(
		enemy,
		level2_chase_speed,
		level2_attack_speed
	)

	for i in range(level2_extra_count):

		spawn_extra_enemy(
			level2_chase_speed,
			level2_attack_speed,
			i
		)

		if i < level2_extra_count - 1:

			await get_tree().create_timer(1.0).timeout

			if current_level != 2:

				return

	print(
		"LEVEL 2 ACTIVE: ",
		extra_enemies.size() + 1,
		" CLARKS"
	)

	if not flickering:

		flickering = true

		level_2_flicker()


func spawn_extra_enemy(
	chase_speed: float,
	attack_speed: float,
	index: int
):

	var new_enemy: CharacterBody3D = enemy_scene.instantiate() as CharacterBody3D

	if new_enemy == null:

		print(
			"ERROR: Could not instantiate Enemy #",
			index + 2
		)

		return

	new_enemy.name = "EnemyExtra_" + str(index + 2)

	add_child(new_enemy)

	var spawn_point: Node3D = null

	match index:

		0:
			spawn_point = spawn2

		1:
			spawn_point = spawn3

		2:
			spawn_point = spawn4

		3:
			spawn_point = spawn5

		4:
			spawn_point = spawn6

		5:
			spawn_point = spawn7

		_:
			print(
				"ERROR: Invalid extra enemy index: ",
				index
			)

			new_enemy.queue_free()

			return

	if spawn_point == null:

		print(
			"ERROR: Spawn point missing for index ",
			index
		)

		new_enemy.queue_free()

		return

	new_enemy.global_position = spawn_point.global_position

	setup_enemy_level(
		new_enemy,
		chase_speed,
		attack_speed
	)

	extra_enemies.append(new_enemy)

	print(
		"SPAWNED EXTRA CLARK #",
		index + 2,
		" NAME = ",
		new_enemy.name
	)

	print(
		"TOTAL EXTRA CLARKS = ",
		extra_enemies.size()
	)

	print(
		"TOTAL CLARKS = ",
		extra_enemies.size() + 1
	)


func setup_enemy_level(
	target_enemy: CharacterBody3D,
	chase_speed: float,
	attack_speed: float
):

	if target_enemy == null:

		return

	target_enemy.chase_speed = chase_speed
	target_enemy.attack_speed = attack_speed


func setup_enemy_normal(
	target_enemy: CharacterBody3D
):

	if target_enemy == null:

		return

	target_enemy.chase_speed = normal_chase_speed
	target_enemy.attack_speed = normal_attack_speed


func clear_extra_enemies():

	for extra_enemy in extra_enemies:

		if is_instance_valid(extra_enemy):

			extra_enemy.queue_free()

	extra_enemies.clear()


func level_2_flicker():

	while current_level == 2:

		await get_tree().create_timer(
			randf_range(
				0.25,
				0.75
			)
		).timeout

		if current_level != 2:

			break

		level_color.color = Color(
			0.0,
			0.0,
			0.0,
			0.75
		)

		await get_tree().create_timer(
			randf_range(
				0.04,
				0.12
			)
		).timeout

		if current_level != 2:

			break

		level_color.color = Color(
			0.45,
			0.008,
			0.008,
			0.30
		)

		if randf() < 0.30:

			await get_tree().create_timer(
				randf_range(
					0.04,
					0.10
				)
			).timeout

			if current_level != 2:

				break

			level_color.color = Color(
				0.0,
				0.0,
				0.0,
				0.75
			)

			await get_tree().create_timer(
				randf_range(
					0.03,
					0.08
				)
			).timeout

			if current_level != 2:

				break

			level_color.color = Color(
				0.45,
				0.008,
				0.008,
				0.30
			)

	flickering = false


func finish_level():

	print("")
	print("==============================")
	print("LEVEL 2 FINISHED")
	print("==============================")

	level_music.stop()
	level_music_active = false

	clear_extra_enemies()

	setup_enemy_normal(enemy)

	flickering = false

	level_color.color = Color(
		1.0,
		1.0,
		1.0,
		0.0
	)

	if level2_extra_count < 6:

		level2_extra_count += 1

	current_level = 0
	survival_timer = normal_survival_time

	print(
		"NEXT LEVEL 2: ",
		level2_extra_count + 1,
		" CLARKS"
	)

	print("BACK TO NORMAL")

	print(
		"SURVIVE ",
		normal_survival_time,
		" seconds until LEVEL 2"
	)
