"""
Desafio: Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

Objetivo:

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Saída:

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
"""

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