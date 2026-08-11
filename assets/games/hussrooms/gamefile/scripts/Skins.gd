extends Panel

@onready var character_image = $CharacterImage
@onready var character_name = $CharacterName
@onready var equip_button = $EquipButton


var characters = [
	{
		"name": "Clark",
		"image": preload("res://ui/clark.png")
	},
	{
		"name": "Mary",
		"image": preload("res://ui/mary.png")
	}
]


var current_index = 0
var equipped_character = "Clark"


func _ready():
	load_skin()

	update_character()

	equip_button.pressed.connect(equip_current_character)


func update_character():
	var character = characters[current_index]

	character_name.text = character["name"]
	character_image.texture = character["image"]

	if character["name"] == equipped_character:
		equip_button.text = "Equipped"
	else:
		equip_button.text = "Equip"



func _on_left_button_pressed():
	current_index -= 1

	if current_index < 0:
		current_index = characters.size() - 1

	update_character()



func _on_right_button_pressed():
	current_index += 1

	if current_index >= characters.size():
		current_index = 0

	update_character()



func equip_current_character():
	equipped_character = characters[current_index]["name"]

	save_skin()

	update_character()



func save_skin():
	var config = ConfigFile.new()

	config.set_value(
		"player",
		"skin",
		equipped_character
	)

	config.save("user://settings.cfg")



func load_skin():
	var config = ConfigFile.new()

	var result = config.load("user://settings.cfg")

	if result == OK:
		equipped_character = config.get_value(
			"player",
			"skin",
			"Clark"
		)
	else:
		equipped_character = "Clark"
