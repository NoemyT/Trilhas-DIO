class_name Player
extends CharacterBody2D

@export_category("Movement")
@export var speed: float = 3
@export_category("Sword")
@export var sword_damage: int = 2
@export_category("Spell")
@export var spell_damage: int = 10
@export var spell_interval: float = 30.0
@export var spell_scene: PackedScene
@export_category("Life")
@export var health: int = 100
@export var max_health: int = 100
@export var death_prefab: PackedScene

@onready var sprite: Sprite2D = $Sprite2D
@onready var animation_player: AnimationPlayer = $AnimationPlayer
@onready var sword_area: Area2D = $SwordArea
@onready var hitbox: Area2D = $Hitbox

var input_vector: Vector2 = Vector2(0, 0)
var is_running: bool = false
var was_running: bool = false
var is_attacking: bool = false
var attack_cd: float = 0.0
var hitbox_cooldown: float = 0.0
var spell_cooldown: float = 0.0

func _process(delta: float) -> void:
	GameManager.player_position = position
	
	read_input()

	if attack_cd > 0:
		attack_cd -= delta
		if attack_cd <= 0.0:
			is_attacking = false
			is_running = false
			animation_player.play("idle")

	animations()

	if Input.is_action_just_pressed("attack"):
		attack()

	update_hitbox_detection(delta)
	
	update_spell(delta)

func _physics_process(delta: float) -> void:
	var target_velocity = input_vector * speed * 100
	if is_attacking:
		target_velocity = target_velocity * 0.25
	velocity = lerp(velocity, target_velocity, 0.05)
	move_and_slide()

func animations() -> void:
		if not is_attacking:
			if was_running != is_running:
				if is_running:
					animation_player.play("run")
				else:
					animation_player.play("idle")

			if input_vector.x > 0:
				sprite.flip_h = false
			elif input_vector.x < 0:
				sprite.flip_h = true

func read_input() -> void:
	input_vector = Input.get_vector("move_left", "move_right", "move_up", "move_down")
	
	was_running = is_running
	is_running = not input_vector.is_zero_approx()

func attack() -> void:
	if is_attacking:
		return

	animation_player.play("sideways_attack_down")
	attack_cd = 0.6
	is_attacking = true

func deal_damage() -> void:
	var bodies = sword_area.get_overlapping_bodies()
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			var diretion_enemy = (enemy.position - position).normalized()
			var attack_direction: Vector2

			if sprite.flip_h:
				attack_direction = Vector2.LEFT
			else:
				attack_direction = Vector2.RIGHT

			var dot_product = diretion_enemy.dot(attack_direction)

			if dot_product >= 0.3:
				enemy.damage(sword_damage)

func damage(amount: int) -> void:
	if health <= 0: return

	health -= amount

	modulate = Color.RED
	var tween = create_tween()
	tween.set_ease(Tween.EASE_IN)
	tween.set_trans(Tween.TRANS_QUINT)
	tween.tween_property(self, "modulate", Color.WHITE, 0.3)

	if health <= 0:
		die()

func die() -> void:
	if death_prefab:
		var death_object = death_prefab.instantiate()
		death_object.position = position
		get_parent().add_child(death_object)

	queue_free()

func update_hitbox_detection(delta: float) -> void:
	hitbox_cooldown -= delta
	if hitbox_cooldown > 0: return

	hitbox_cooldown = 0.5

	var bodies = hitbox.get_overlapping_bodies()
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			var damage_amount = 1
			damage(damage_amount)

func heal(amount: int) -> int:
	health += amount
	if health > max_health:
		health = max_health

		modulate = Color.GREEN
		var tween = create_tween()
		tween.set_ease(Tween.EASE_IN)
		tween.set_trans(Tween.TRANS_QUINT)
		tween.tween_property(self, "modulate", Color.WHITE, 0.3)
		
	return health

func update_spell(delta: float) -> void:
	spell_cooldown -= delta
	if spell_cooldown > 0: return

	spell_cooldown = spell_interval

	var spell = spell_scene.instantiate()
	spell.damage = spell_damage
	add_child(spell)
