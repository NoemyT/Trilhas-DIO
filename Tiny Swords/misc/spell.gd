extends Node2D

@export var damage: int = 10

@onready var area2d: Area2D = $Area2D

func spell_activation():
	var bodies = area2d.get_overlapping_bodies()

	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			enemy.damage(damage)
