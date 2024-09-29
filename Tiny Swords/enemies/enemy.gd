class_name Enemy
extends Node2D

@export_category("Life")
@export var health: int = 10
@export var death_prefab: PackedScene
@export_category("Drops")
@export var drop_rate: float = 0.1
@export var drop_itens: Array[PackedScene]
@export var drop_rates: Array[float]

@onready var damage_output_marker: Marker2D = $DamageOutputMarker

var damage_output_prefab: PackedScene

func _ready():
	damage_output_prefab = preload("res://misc/damage_output.tscn")

func damage(amount: int) -> void:
	health -= amount

	modulate = Color.RED
	var tween = create_tween()
	tween.set_ease(Tween.EASE_IN)
	tween.set_trans(Tween.TRANS_QUINT)
	tween.tween_property(self, "modulate", Color.WHITE, 0.3)

	var damage_output = damage_output_prefab.instantiate()
	damage_output.value = amount
	if damage_output_marker:
		damage_output.global_position = damage_output_marker.global_position
	else:
		damage_output.global_position = global_position
	get_parent().add_child(damage_output)

	if health <= 0:
		die()

func die() -> void:
	if death_prefab:
		var death_object = death_prefab.instantiate()
		death_object.position = position
		get_parent().add_child(death_object)

	if randf() <= drop_rate:
		drop_item()

	GameManager.monsters_defeated_counter += 1

	queue_free()

func drop_item() -> void:
	var drop = get_random_drop_item().instantiate()
	drop.position = position
	get_parent().add_child(drop)

func get_random_drop_item() -> PackedScene:
	if drop_itens.size() == 1:
		return drop_itens[0]

	var max_rate: float = 0.0
	for drop_rate in drop_rates:
		max_rate += drop_rate

	var random_value = randf() * max_rate

	var needle: float = 0.0
	for i in drop_itens.size():
		var drop_item = drop_itens[i]
		var drop_rate = drop_rates[i] if i < drop_rates.size() else 1
		if random_value <= drop_rate + needle:
			return drop_item
		needle += drop_rate

	return drop_itens[0]
