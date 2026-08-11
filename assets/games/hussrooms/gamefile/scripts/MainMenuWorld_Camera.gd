extends Camera3D

@export var rotation_speed = 0.15

func _process(delta):
	rotate_y(rotation_speed * delta)
