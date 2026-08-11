extends Node3D

@onready var anim = $AnimationPlayer

@onready var run2 = $"../Run2"
@onready var run2_anim = $"../Run2/AnimationPlayer"

@onready var run3 = $"../Run3"
@onready var run3_anim = $"../Run3/AnimationPlayer"

@export var speed = 2.8

@export var forward_distance = 12.0
@export var back_distance = 15.0

@export var mary_follow_distance = 1.2
@export var captain_follow_distance = 2.5

var start_position: Vector3
var forward_end_position: Vector3
var back_end_position: Vector3

var going_forward = true


func _ready():
	start_position = global_position

	forward_end_position = start_position + Vector3(
		-forward_distance,
		0,
		0
	)

	back_end_position = start_position + Vector3(
		back_distance,
		0,
		0
	)

	anim.play("mixamo_com")
	anim.get_animation("mixamo_com").loop_mode = Animation.LOOP_LINEAR

	run2_anim.play("mixamo_com")
	run2_anim.get_animation("mixamo_com").loop_mode = Animation.LOOP_LINEAR

	run3_anim.play("mixamo_com")
	run3_anim.get_animation("mixamo_com").loop_mode = Animation.LOOP_LINEAR

	# Initial positions
	run3.global_position = global_position + Vector3(
		mary_follow_distance,
		0,
		0
	)

	run2.global_position = global_position + Vector3(
		mary_follow_distance + captain_follow_distance,
		0,
		0
	)

	run3.rotation.y = rotation.y
	run2.rotation.y = rotation.y


func _process(delta):

	var target: Vector3

	if going_forward:
		target = forward_end_position
	else:
		target = back_end_position

	# Move Clark
	global_position = global_position.move_toward(
		target,
		speed * delta
	)

	# Calculate direction of travel
	var direction = global_position.direction_to(target)

	if direction.length() > 0.01:
		rotation.y = lerp_angle(
			rotation.y,
			atan2(direction.x, direction.z),
			5.0 * delta
		)

	# Keep Mary behind Clark
	var behind_direction = -direction.normalized()

	run3.global_position = global_position + (
		behind_direction * mary_follow_distance
	)

	# Keep Captain Clark farther behind
	run2.global_position = global_position + (
		behind_direction * (
			mary_follow_distance + captain_follow_distance
		)
	)

	run3.rotation.y = rotation.y
	run2.rotation.y = rotation.y

	# Reached destination
	if global_position.distance_to(target) < 0.1:

		going_forward = !going_forward

		rotation.y += PI

		run3.rotation.y = rotation.y
		run2.rotation.y = rotation.y
