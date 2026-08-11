extends Control

var world_scene = preload("res://scenes/MainMenuWorld.tscn")

func _ready():
	$CreditsPopup.hide()
	$SkinsPopup.hide()
	$BackButton.hide()

	var world = world_scene.instantiate()
	add_child(world)


func hide_main_menu():
	$Title.hide()
	$Subtitle.hide()
	$MenuButtons.hide()
	$CreditsButton.hide()


func show_main_menu():
	$Title.show()
	$Subtitle.show()
	$MenuButtons.show()
	$CreditsButton.show()


func _on_credits_button_pressed():
	hide_main_menu()

	$CreditsPopup.show()
	$BackButton.show()


func _on_skins_button_pressed():
	hide_main_menu()

	$SkinsPopup.show()
	$BackButton.show()


func _on_back_button_pressed():
	$CreditsPopup.hide()
	$SkinsPopup.hide()
	$BackButton.hide()

	show_main_menu()


func _on_play_button_pressed():
	var fade = ColorRect.new()
	fade.color = Color.BLACK
	fade.modulate.a = 0.0

	fade.set_anchors_preset(Control.PRESET_FULL_RECT)
	fade.size = get_viewport_rect().size

	add_child(fade)

	var tween = create_tween()
	tween.tween_property(fade, "modulate:a", 2.0, 0.11)

	await tween.finished

	get_tree().change_scene_to_file("res://scenes/Game.tscn")
