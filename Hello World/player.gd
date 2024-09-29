extends Sprite2D

@export var speed = 300.0

# Called when the node enters the scene tree for the first time.
func _ready():
	print("America Ya! -Osaka")


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var input = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	position += input * speed * delta
