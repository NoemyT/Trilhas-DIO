name = input("Qual o nome do herói?: ")
xp = int(input(f"Quanto de XP {name} possui?: "))

if xp < 0:
    print("\nErro")
elif xp < 1000:
    print(f"\nO Herói de nome {name} está no nível de Ferro")
elif xp >= 1001 and xp <= 2000:
    print(f"\nO Herói de nome {name} está no nível de Bronze")
elif xp >= 2001 and xp <= 5000:
    print(f"\nO Herói de nome {name} está no nível de Prata")
elif xp >= 5001 and xp <= 7000:
    print(f"\nO Herói de nome {name} está no nível de Ouro")
elif xp >= 7001 and xp <= 8000:
    print(f"\nO Herói de nome {name} está no nível de Platina")
elif xp >= 8001 and xp <= 9000:
    print(f"\nO Herói de nome {name} está no nível de Ascendente")
elif xp >= 9001 and xp <= 10000:
    print(f"\nO Herói de nome {name} está no nível de Imortal")
else:
    print(f"\nO Herói de nome {name} está no nível de Radiante")