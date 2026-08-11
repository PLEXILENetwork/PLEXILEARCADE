extends CharacterBody3D

@export var chase_speed: float = 4.8
@export var attack_speed: float = 30.2

@export var acceleration: float = 5.5
@export var deceleration: float = 3.0
@export var attack_acceleration: float = 2.0

@export var attack_distance: float = 1.5
@export var attack_cancel_distance: float = 2.1
@export var attack_cooldown: float = 0.15

@export var animation_blend: float = 0.15
@export var attack_sound_delay: float = 0.1


@onready var navigation_agent: NavigationAgent3D = $NavigationAgent3D

@onready var idle_model = $Idle
@onready var run_model = $Run
@onready var attack_model = $Attack

@onready var idle_anim: AnimationPlayer = $Idle/AnimationPlayer
@onready var run_anim: AnimationPlayer = $Run/AnimationPlayer
@onready var attack_anim: AnimationPlayer = $Attack/AnimationPlayer

@onready var footsteps: AudioStreamPlayer3D = $Footsteps
@onready var attack_sound: AudioStreamPlayer3D = $AttackSound


var player: CharacterBody3D

var attacking: bool = false
var attack_timer: float = 0.0

var attack_id: int = 0
var has_hit_player: bool = false

var chasing_dead_body: bool = false


func _ready():

	player = get_tree().get_first_node_in_group("player") as CharacterBody3D

	if player == null:

		print("ERROR: Could not find Player. Add Player to the 'player' group.")

		return


	navigation_agent.path_desired_distance = 0.5
	navigation_agent.target_desired_distance = attack_distance


	# =========================
	# ANIMATION SETUP
	# =========================

	if idle_anim.has_animation("mixamo_com"):

		idle_anim.get_animation(
			"mixamo_com"
		).loop_mode = Animation.LOOP_LINEAR


	if run_anim.has_animation("mixamo_com"):

		run_anim.get_animation(
			"mixamo_com"
		).loop_mode = Animation.LOOP_LINEAR


	if attack_anim.has_animation("mixamo_com"):

		attack_anim.get_animation(
			"mixamo_com"
		).loop_mode = Animation.LOOP_NONE


	if not attack_anim.animation_finished.is_connected(_on_attack_finished):

		attack_anim.animation_finished.connect(
			_on_attack_finished
		)


	idle_model.show()
	run_model.hide()
	attack_model.hide()

	idle_anim.play("mixamo_com")

	if footsteps:

		footsteps.stop()


func _physics_process(delta):

	if player == null:

		return


	# =====================================
	# CHECK FOR PLAYER DEATH
	# =====================================

	if player.get("is_dead") == true:

		chasing_dead_body = true


	# =====================================
	# ATTACK TIMER
	# =====================================

	if attack_timer > 0.0:

		attack_timer -= delta


	# =====================================
	# PLAYER DISTANCE
	# =====================================

	var distance: float = global_position.distance_to(
		player.global_position
	)


	if chasing_dead_body:

		handle_dead_body_chase(
			delta,
			distance
		)

		return


	# =====================================
	# NORMAL PLAYER TARGET
	# =====================================

	navigation_agent.target_position = player.global_position


	# =====================================
	# ATTACKING
	# =====================================

	if attacking:

		if distance > attack_cancel_distance:

			stop_attack_and_chase()

		else:

			var direction: Vector3 = global_position.direction_to(
				player.global_position
			)

			direction.y = 0.0


			if direction.length() > 0.01:

				direction = direction.normalized()


				velocity.x = move_toward(
					velocity.x,
					direction.x * attack_speed,
					attack_acceleration * delta
				)


				velocity.z = move_toward(
					velocity.z,
					direction.z * attack_speed,
					attack_acceleration * delta
				)


				rotation.y = atan2(
					direction.x,
					direction.z
				)


	# =====================================
	# START ATTACK
	# =====================================

	elif distance <= attack_distance:

		velocity.x = move_toward(
			velocity.x,
			0.0,
			deceleration * delta
		)


		velocity.z = move_toward(
			velocity.z,
			0.0,
			deceleration * delta
		)


		if attack_timer <= 0.0:

			start_attack()


	# =====================================
	# NORMAL CHASE
	# =====================================

	else:

		var next_position: Vector3 = navigation_agent.get_next_path_position()


		var direction: Vector3 = global_position.direction_to(
			next_position
		)

		direction.y = 0.0


		if direction.length() > 0.01:

			direction = direction.normalized()


			velocity.x = move_toward(
				velocity.x,
				direction.x * chase_speed,
				acceleration * delta
			)


			velocity.z = move_toward(
				velocity.z,
				direction.z * chase_speed,
				acceleration * delta
			)


			rotation.y = atan2(
				direction.x,
				direction.z
			)


			start_run()


		else:

			velocity.x = move_toward(
				velocity.x,
				0.0,
				deceleration * delta
			)


			velocity.z = move_toward(
				velocity.z,
				0.0,
				deceleration * delta
			)


			if abs(velocity.x) < 0.1 and abs(velocity.z) < 0.1:

				start_idle()


	# =====================================
	# GRAVITY
	# =====================================

	if not is_on_floor():

		velocity.y -= 9.8 * delta

	else:

		velocity.y = 0.0


	move_and_slide()


# =====================================
# DEAD BODY CHASE
# =====================================

func handle_dead_body_chase(
	delta: float,
	distance: float
):


	# =================================
	# IF CURRENTLY ATTACKING DEAD BODY
	# =================================

	if attacking:

		# Keep Clark looking at the body.

		var direction: Vector3 = global_position.direction_to(
			player.global_position
		)

		direction.y = 0.0


		if direction.length() > 0.01:

			direction = direction.normalized()


			velocity.x = move_toward(
				velocity.x,
				direction.x * 0.8,
				attack_acceleration * delta
			)


			velocity.z = move_toward(
				velocity.z,
				direction.z * 0.8,
				attack_acceleration * delta
			)


			rotation.y = atan2(
				direction.x,
				direction.z
			)


	elif distance <= attack_distance:

		velocity.x = move_toward(
			velocity.x,
			0.0,
			deceleration * delta
		)


		velocity.z = move_toward(
			velocity.z,
			0.0,
			deceleration * delta
		)


		var direction: Vector3 = global_position.direction_to(
			player.global_position
		)

		direction.y = 0.0


		if direction.length() > 0.01:

			direction = direction.normalized()

			rotation.y = atan2(
				direction.x,
				direction.z
			)


		if attack_timer <= 0.0:

			start_dead_body_attack()

	else:

		navigation_agent.target_position = player.global_position


		var next_position: Vector3 = navigation_agent.get_next_path_position()


		var direction: Vector3 = global_position.direction_to(
			next_position
		)

		direction.y = 0.0


		if direction.length() > 0.01:

			direction = direction.normalized()


			velocity.x = move_toward(
				velocity.x,
				direction.x * chase_speed,
				acceleration * delta
			)


			velocity.z = move_toward(
				velocity.z,
				direction.z * chase_speed,
				acceleration * delta
			)


			rotation.y = atan2(
				direction.x,
				direction.z
			)


			start_run()


		else:

			velocity.x = move_toward(
				velocity.x,
				0.0,
				deceleration * delta
			)


			velocity.z = move_toward(
				velocity.z,
				0.0,
				deceleration * delta
			)


			start_idle()


	# =================================
	# GRAVITY
	# =================================

	if not is_on_floor():

		velocity.y -= 9.8 * delta

	else:

		velocity.y = 0.0


	move_and_slide()


# =====================================
# IDLE
# =====================================

func start_idle():

	if attacking:

		return


	idle_model.show()
	run_model.hide()
	attack_model.hide()


	if idle_anim.current_animation != "mixamo_com":

		idle_anim.play(
			"mixamo_com",
			animation_blend
		)


	stop_footsteps()


# =====================================
# RUN
# =====================================

func start_run():

	if attacking:

		return


	idle_model.hide()
	run_model.show()
	attack_model.hide()


	if run_anim.current_animation != "mixamo_com":

		run_anim.play(
			"mixamo_com",
			animation_blend
		)


	start_footsteps()


# =====================================
# NORMAL ATTACK
# =====================================

func start_attack():

	if attacking:

		return


	attacking = true

	has_hit_player = false

	attack_id += 1


	var current_attack_id: int = attack_id


	idle_model.hide()
	run_model.hide()
	attack_model.show()


	run_anim.stop()
	idle_anim.stop()


	attack_anim.speed_scale = 1.35


	attack_anim.play(
		"mixamo_com",
		animation_blend
	)


	await get_tree().create_timer(
		0.6
	).timeout


	if attacking and current_attack_id == attack_id:

		if not has_hit_player:

			has_hit_player = true


			if player != null and player.has_method("die"):

				var hit_direction: Vector3 = (
					player.global_position - global_position
				)

				hit_direction.y = 0.0


				if hit_direction.length() < 0.01:

					hit_direction = -global_transform.basis.z


				hit_direction = hit_direction.normalized()


				player.die(
					hit_direction
				)


	# ==============================
	# ATTACK SOUND
	# ==============================

	await get_tree().create_timer(
		max(attack_sound_delay - 0.25, 0.0)
	).timeout


	if attacking and current_attack_id == attack_id:

		if attack_sound:

			attack_sound.stop()
			attack_sound.play()


func start_dead_body_attack():

	if attacking:

		return


	attacking = true

	attack_id += 1


	var current_attack_id: int = attack_id


	idle_model.hide()
	run_model.hide()
	attack_model.show()


	run_anim.stop()
	idle_anim.stop()


	attack_anim.speed_scale = 1.35


	attack_anim.play(
		"mixamo_com",
		animation_blend
	)


	# IMPORTANT:
	# There is deliberately NO AttackSound here.


	await get_tree().create_timer(
		0.2
	).timeout


	# Make sure this attack still belongs
	# to the current attack.

	if not attacking:

		return


	if current_attack_id != attack_id:

		return


	# Nothing else happens.
	# Clark simply finishes the attack animation.


# =====================================
# ATTACK FINISHED
# =====================================

func _on_attack_finished(
	animation_name: StringName
):

	if animation_name != "mixamo_com":

		return


	attack_id += 1

	attacking = false

	attack_timer = attack_cooldown


	# Never let attack sound remain playing.

	if attack_sound:

		attack_sound.stop()


	attack_model.hide()


	if chasing_dead_body:


		run_model.hide()
		idle_model.hide()


		var distance: float = global_position.distance_to(
			player.global_position
		)


		if distance <= attack_distance:

			start_dead_body_attack()

		else:

			run_model.show()

			run_anim.play(
				"mixamo_com",
				animation_blend
			)

			start_footsteps()


		return


	# =================================
	# NORMAL PLAYER
	# =================================

	run_model.show()
	idle_model.hide()


	attack_anim.stop()


	if player == null:

		start_idle()

		return


	if player.get("is_dead") == true:

		chasing_dead_body = true

		handle_dead_body_chase(
			0.0,
			global_position.distance_to(
				player.global_position
			)
		)

		return


	var distance: float = global_position.distance_to(
		player.global_position
	)


	if distance <= attack_distance:

		start_attack()


	else:

		run_anim.play(
			"mixamo_com",
			animation_blend
		)

		start_footsteps()


# =====================================
# CANCEL ATTACK
# =====================================

func stop_attack_and_chase():

	if not attacking:

		return


	attack_id += 1

	attacking = false

	has_hit_player = false


	if attack_sound:

		attack_sound.stop()


	attack_anim.stop()


	attack_model.hide()

	idle_model.hide()

	run_model.show()


	attack_timer = attack_cooldown


	run_anim.play(
		"mixamo_com",
		animation_blend
	)


	start_footsteps()


# =====================================
# FOOTSTEPS
# =====================================

func start_footsteps():

	if footsteps == null:

		return


	if not footsteps.playing:

		footsteps.play()


func stop_footsteps():

	if footsteps == null:

		return


	if footsteps.playing:

		footsteps.stop()
