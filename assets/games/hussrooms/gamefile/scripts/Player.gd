extends CharacterBody3D

@export var mouse_sensitivity = 0.002

@onready var camera = $SpringArm3D/Camera3D
@onready var spring_arm = $SpringArm3D

@onready var idle_model = $Idle
@onready var run_model = $Run
@onready var idle_mary_model = $Idle2
@onready var run_mary_model = $Run2

@onready var death_model = $Death
@onready var death_mary_model = $Death2

@onready var idle_anim = $Idle/AnimationPlayer
@onready var run_anim = $Run/AnimationPlayer
@onready var idle_mary_anim = $Idle2/AnimationPlayer
@onready var run_mary_anim = $Run2/AnimationPlayer

@onready var death_anim = $Death/AnimationPlayer
@onready var death_mary_anim = $Death2/AnimationPlayer

@onready var stamina_bar = $"../CanvasLayer/StaminaBar"
@onready var spawn = $"../Spawn"

@onready var footsteps = $Footsteps
@onready var voice = $ClarkVoice

@onready var clark_button = $"../ClarkSound/ClarkSound"

# CORRECT FIRST PERSON BUTTON PATH
@onready var first_person_button = $"../FirstPerson/FirstPerson"

@onready var name_label = $NameLabel


var clark_sounds = [
	load("res://audio/clark_architect.ogg"),
	load("res://audio/clark_iamaarchitect.ogg"),
	load("res://audio/clark_scream.ogg"),
	load("res://audio/clark_stayincharacter.ogg"),
	load("res://audio/clark_wired.ogg")
]


var gravity = 9.8

var stop_delay = 0.09
var stop_timer = 0.0
var is_running = false

var normal_speed = 4.5
var sprint_speed = 6.0
var current_speed = 4.5
var acceleration = 8.0

var max_stamina = 100.0
var stamina = 100.0
var stamina_drain = 13.0
var stamina_regen = 17.0

var walk_pitch = 1.3
var run_pitch = 1.0

var equipped_skin = "Clark"

var wobble_time = 0.0
var wobble_amount = 0.0
var wobble_speed = 0.0

var first_person = false
var third_person_spring_length = 0.0

var is_dead = false
var death_screen: Control


# =====================================
# READY
# =====================================

func _ready():

	randomize()

	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

	if clark_button:
		clark_button.focus_mode = Control.FOCUS_ALL

	if first_person_button:

		first_person_button.pressed.connect(
			toggle_first_person
		)

		first_person_button.focus_mode = Control.FOCUS_NONE

	if spring_arm:

		third_person_spring_length = spring_arm.spring_length

	if spawn:

		global_position = spawn.global_position

	load_player_skin()
	setup_player_skin()
	update_name_label()

	if stamina_bar:

		stamina_bar.max_value = max_stamina
		stamina_bar.value = stamina

	if death_anim:

		if death_anim.has_animation("mixamo_com"):

			death_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_NONE

	if death_mary_anim:

		if death_mary_anim.has_animation("mixamo_com"):

			death_mary_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_NONE

	death_model.hide()
	death_mary_model.hide()


# =====================================
# LOAD PLAYER SKIN
# =====================================

func load_player_skin():

	var config = ConfigFile.new()

	if config.load("user://settings.cfg") == OK:

		equipped_skin = config.get_value(
			"player",
			"skin",
			"Clark"
		)

	else:

		equipped_skin = "Clark"


# =====================================
# SETUP PLAYER SKIN
# =====================================

func setup_player_skin():

	var is_mary = equipped_skin == "Mary"

	idle_model.hide()
	run_model.hide()

	idle_mary_model.hide()
	run_mary_model.hide()

	death_model.hide()
	death_mary_model.hide()

	if first_person:

		return

	if is_mary:

		idle_mary_model.show()

	else:

		idle_model.show()


	# =================================
	# CLARK ANIMATIONS
	# =================================

	if idle_anim:

		idle_anim.play("mixamo_com")

		if idle_anim.has_animation("mixamo_com"):

			idle_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_LINEAR


	if run_anim:

		if run_anim.has_animation("mixamo_com"):

			run_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_LINEAR


	# =================================
	# MARY ANIMATIONS
	# =================================

	if idle_mary_anim:

		idle_mary_anim.play("mixamo_com")

		if idle_mary_anim.has_animation("mixamo_com"):

			idle_mary_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_LINEAR


	if run_mary_anim:

		if run_mary_anim.has_animation("mixamo_com"):

			run_mary_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_LINEAR


# =====================================
# FIRST PERSON
# =====================================

func toggle_first_person():

	if is_dead:

		return

	first_person = !first_person

	if first_person:

		spring_arm.spring_length = 0.0

		camera.position = Vector3(
			0.0,
			1.6,
			0.0
		)

		idle_model.hide()
		run_model.hide()

		idle_mary_model.hide()
		run_mary_model.hide()

		print("FIRST PERSON")

	else:

		spring_arm.spring_length = third_person_spring_length

		camera.position = Vector3.ZERO

		setup_player_skin()

		print("THIRD PERSON")


# =====================================
# FIRST PERSON BUTTON ANIMATION
# =====================================

func animate_first_person_button():

	if first_person_button == null:

		return

	# Get the EXACT styles from the FirstPerson button.
	var normal_style = first_person_button.get_theme_stylebox(
		"normal"
	)

	var hover_style = first_person_button.get_theme_stylebox(
		"hover"
	)

	var pressed_style = first_person_button.get_theme_stylebox(
		"pressed"
	)


	# =================================
	# HOVER
	# =================================

	if hover_style:

		first_person_button.add_theme_stylebox_override(
			"normal",
			hover_style
		)

	await get_tree().create_timer(0.10).timeout

	if is_dead:

		return


	# =================================
	# PRESSED
	# =================================

	if pressed_style:

		first_person_button.add_theme_stylebox_override(
			"normal",
			pressed_style
		)

	await get_tree().create_timer(0.10).timeout

	if is_dead:

		return


	# =================================
	# BACK TO NORMAL
	# =================================

	if normal_style:

		first_person_button.add_theme_stylebox_override(
			"normal",
			normal_style
		)


# =====================================
# NAME
# =====================================

func update_name_label():

	if equipped_skin == "Mary":

		name_label.text = "Mary69"

	else:

		name_label.text = "Clark67"


# =====================================
# INPUT
# =====================================

func _unhandled_input(event):

	if is_dead:

		return

	if event is InputEventMouseMotion:

		rotate_y(
			-event.relative.x * mouse_sensitivity
		)

		$SpringArm3D.rotate_x(
			-event.relative.y * mouse_sensitivity
		)

		$SpringArm3D.rotation.x = clamp(
			$SpringArm3D.rotation.x,
			-1.0,
			0.5
		)


	if event is InputEventKey:

		# =================================
		# G = FIRST PERSON
		# =================================

		if event.keycode == KEY_G and event.pressed and !event.echo:

			animate_first_person_button()

			toggle_first_person()


		# =================================
		# R = CLARK VOICE
		# =================================

		if event.keycode == KEY_R and event.pressed and !event.echo:

			if clark_button:

				clark_button.add_theme_stylebox_override(
					"normal",
					clark_button.get_theme_stylebox("hover")
				)

				await get_tree().create_timer(0.1).timeout

				clark_button.add_theme_stylebox_override(
					"normal",
					clark_button.get_theme_stylebox("pressed")
				)

				await get_tree().create_timer(0.1).timeout

				clark_button.add_theme_stylebox_override(
					"normal",
					clark_button.get_theme_stylebox("normal")
				)

				play_random_clark_voice()


# =====================================
# RANDOM CLARK VOICELINE
# =====================================

func play_random_clark_voice():

	if voice.playing:

		return

	var random_index = randi() % clark_sounds.size()

	voice.stream = clark_sounds[random_index]

	voice.play()


# =====================================
# PLAYER MOVEMENT
# =====================================

func _physics_process(delta):

	# =================================
	# DEAD
	# =================================

	if is_dead:

		if not is_on_floor():

			velocity.y -= gravity * delta

		else:

			velocity.x = move_toward(
				velocity.x,
				0.0,
				3.0 * delta
			)

			velocity.z = move_toward(
				velocity.z,
				0.0,
				3.0 * delta
			)

			velocity.y = 0.0

		move_and_slide()

		return


	# =================================
	# GRAVITY
	# =================================

	if not is_on_floor():

		velocity.y -= gravity * delta


	# =================================
	# MOVEMENT INPUT
	# =================================

	var direction = Vector3.ZERO

	if Input.is_key_pressed(KEY_W):

		direction -= transform.basis.z

	if Input.is_key_pressed(KEY_S):

		direction += transform.basis.z

	if Input.is_key_pressed(KEY_A):

		direction -= transform.basis.x

	if Input.is_key_pressed(KEY_D):

		direction += transform.basis.x

	direction = direction.normalized()


	# =================================
	# SPEED / STAMINA
	# =================================

	var target_speed = normal_speed

	if Input.is_key_pressed(KEY_SHIFT) and direction.length() > 0 and stamina > 0:

		target_speed = sprint_speed

		stamina -= stamina_drain * delta

		if stamina <= 0:

			stamina = 0
			target_speed = normal_speed

	else:

		target_speed = normal_speed

		stamina += stamina_regen * delta


	stamina = clamp(
		stamina,
		0,
		max_stamina
	)


	if stamina_bar:

		stamina_bar.value = stamina

		var fill = stamina_bar.get_theme_stylebox("fill")

		if fill:

			if stamina <= 25:

				fill.bg_color = Color("ff2620ff")

			else:

				fill.bg_color = Color("#35C759")


	# =================================
	# ACCELERATION
	# =================================

	current_speed = move_toward(
		current_speed,
		target_speed,
		acceleration * delta
	)

	var target_velocity = direction * current_speed

	velocity.x = move_toward(
		velocity.x,
		target_velocity.x,
		23.0 * delta
	)

	velocity.z = move_toward(
		velocity.z,
		target_velocity.z,
		23.0 * delta
	)


	# =================================
	# FOOTSTEPS
	# =================================

	if direction.length() > 0:

		var wanted_sound = load(
			"res://audio/footstep_walk.ogg"
		)

		if current_speed > normal_speed:

			wanted_sound = load(
				"res://audio/footstep_run.ogg"
			)

			footsteps.pitch_scale = run_pitch

		else:

			footsteps.pitch_scale = walk_pitch

		if footsteps.stream != wanted_sound:

			footsteps.stop()
			footsteps.stream = wanted_sound
			footsteps.play()

		elif !footsteps.playing:

			footsteps.play()

	else:

		if footsteps.playing:

			footsteps.stop()


	# =================================
	# ANIMATION SWITCHING
	# =================================

	var is_mary = equipped_skin == "Mary"

	if direction.length() > 0:

		if is_mary:

			idle_mary_model.hide()
			run_mary_model.show()

			idle_model.hide()
			run_model.hide()

			death_model.hide()
			death_mary_model.hide()

			is_running = true
			stop_timer = stop_delay

			if run_mary_anim.current_animation != "mixamo_com":

				run_mary_anim.play("mixamo_com")

		else:

			idle_model.hide()
			run_model.show()

			idle_mary_model.hide()
			run_mary_model.hide()

			death_model.hide()
			death_mary_model.hide()

			is_running = true
			stop_timer = stop_delay

			if run_anim.current_animation != "mixamo_com":

				run_anim.play("mixamo_com")

	else:

		if is_running:

			stop_timer -= delta

		if stop_timer <= 0:

			if is_mary:

				run_mary_model.hide()
				idle_mary_model.show()

				run_model.hide()
				idle_model.hide()

				if idle_mary_anim.current_animation != "mixamo_com":

					idle_mary_anim.play("mixamo_com")

			else:

				run_model.hide()
				idle_model.show()

				run_mary_model.hide()
				idle_mary_model.hide()

				if idle_anim.current_animation != "mixamo_com":

					idle_anim.play("mixamo_com")

			is_running = false


	# =================================
	# HIDE PLAYER IN FIRST PERSON
	# =================================

	if first_person:

		idle_model.hide()
		run_model.hide()

		idle_mary_model.hide()
		run_mary_model.hide()


	# =================================
	# WOBBLE
	# =================================

	if direction.length() > 0:

		wobble_time += delta * wobble_speed

		var wobble = sin(
			wobble_time
		) * wobble_amount

		idle_model.rotation.z = wobble
		run_model.rotation.z = wobble

		idle_mary_model.rotation.z = wobble
		run_mary_model.rotation.z = wobble

	else:

		wobble_time = 0.0

		idle_model.rotation.z = lerp(
			idle_model.rotation.z,
			0.0,
			8.0 * delta
		)

		run_model.rotation.z = lerp(
			run_model.rotation.z,
			0.0,
			8.0 * delta
		)

		idle_mary_model.rotation.z = lerp(
			idle_mary_model.rotation.z,
			0.0,
			8.0 * delta
		)

		run_mary_model.rotation.z = lerp(
			run_mary_model.rotation.z,
			0.0,
			8.0 * delta
		)


	move_and_slide()


# =====================================
# DEATH
# =====================================

func die(hit_direction: Vector3):

	if is_dead:

		return

	is_dead = true

	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE


	# =================================
	# HIDE GAMEPLAY UI
	# =================================

	if stamina_bar:

		stamina_bar.hide()

	if clark_button:

		clark_button.hide()

	if first_person_button:

		first_person_button.hide()


	var clark_sound = get_node_or_null(
		"../ClarkSound"
	)

	if clark_sound:

		var subtitle = clark_sound.get_node_or_null(
			"Subtitle"
		)

		if subtitle:

			subtitle.hide()


	if voice:

		voice.stop()

	if footsteps:

		footsteps.stop()


	idle_anim.stop()
	run_anim.stop()

	idle_mary_anim.stop()
	run_mary_anim.stop()


	idle_model.hide()
	run_model.hide()

	idle_mary_model.hide()
	run_mary_model.hide()


	# =================================
	# DEATH ANIMATION
	# =================================

	if equipped_skin == "Mary":

		death_model.hide()

		death_mary_model.show()

		if death_mary_anim.has_animation("mixamo_com"):

			death_mary_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_NONE

		death_mary_anim.play(
			"mixamo_com"
		)

	else:

		death_mary_model.hide()

		death_model.show()

		if death_anim.has_animation("mixamo_com"):

			death_anim.get_animation(
				"mixamo_com"
			).loop_mode = Animation.LOOP_NONE

		death_anim.play(
			"mixamo_com"
		)


	hit_direction.y = 0.0

	if hit_direction.length() < 0.01:

		hit_direction = -global_transform.basis.z

	else:

		hit_direction = hit_direction.normalized()


	var launch_power := 8.5
	var upward_power := 4.8

	velocity = hit_direction * launch_power
	velocity.y = upward_power


	var spin_direction := 1.0

	if randf() > 0.5:

		spin_direction = -1.0


	var spin_speed := randf_range(
		4.5,
		7.0
	) * spin_direction


	var death_scream := AudioStreamPlayer3D.new()

	death_scream.stream = load(
		"res://audio/clark_scream.ogg"
	)

	death_scream.global_position = global_position

	get_tree().current_scene.add_child(
		death_scream
	)

	death_scream.play()


	var ragdoll_time := 0.0
	var max_ragdoll_time := 1.4

	while ragdoll_time < max_ragdoll_time:

		var frame_delta := get_physics_process_delta_time()

		ragdoll_time += frame_delta

		velocity.x = move_toward(
			velocity.x,
			0.0,
			1.2 * frame_delta
		)

		velocity.z = move_toward(
			velocity.z,
			0.0,
			1.2 * frame_delta
		)

		velocity.y -= gravity * frame_delta

		var spin_fade = 1.0 - (
			ragdoll_time / max_ragdoll_time
		)

		spin_fade = max(
			spin_fade,
			0.0
		)

		rotate_x(
			spin_speed * spin_fade * frame_delta
		)

		rotate_z(
			spin_speed * 0.55 * spin_fade * frame_delta
		)

		move_and_slide()

		await get_tree().physics_frame


	# =================================
	# DEATH SCREEN
	# =================================

	death_screen = get_tree().current_scene.find_child(
		"DeathScreen",
		true,
		false
	)

	if death_screen:

		death_screen.show()

		setup_death_buttons()


# =====================================
# DEATH BUTTONS
# =====================================

func setup_death_buttons():

	if death_screen == null:

		return

	var respawn_button = death_screen.find_child(
		"Respawn",
		true,
		false
	)

	var main_menu_button = death_screen.find_child(
		"MainMenu",
		true,
		false
	)


	if respawn_button:

		if not respawn_button.pressed.is_connected(_respawn):

			respawn_button.pressed.connect(
				_respawn
			)


	if main_menu_button:

		if not main_menu_button.pressed.is_connected(_go_to_main_menu):

			main_menu_button.pressed.connect(
				_go_to_main_menu
			)


# =====================================
# RESPAWN
# =====================================

func _respawn():

	get_tree().reload_current_scene()


# =====================================
# MAIN MENU
# =====================================

func _go_to_main_menu():

	get_tree().change_scene_to_file(
		"res://scenes/MainMenu.tscn"
	)
