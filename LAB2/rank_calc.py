def calcularRank(vitorias, derrotas):
    return vitorias - derrotas

def definirRank(saldo):
    if saldo < 10:
        nivel = "Ferro"
        return nivel
    elif saldo >= 11 and saldo <= 20:
        nivel = "Bronze"
        return nivel
    elif saldo >= 21 and saldo <= 50:
        nivel = "Prata"
        return nivel
    elif saldo >= 51 and saldo <= 80:
        nivel = "Ouro"
        return nivel
    elif saldo >= 81 and saldo <= 90:
        nivel = "Diamante"
        return nivel
    elif saldo >= 91 and saldo <= 100:
        nivel = "Lendário"
        return nivel
    else:
        nivel = "Imortal"
        return nivel
    
def Imprimir(saldo, nivel):
    print(f"O Héroi possui um saldo de {saldo} sendo assim nível {nivel}")
    
vitorias = int(input("Número de Vitórias: "))
derrotas = int(input("Número de Derrotas: "))

saldo = calcularRank(vitorias, derrotas)
nivel = definirRank(saldo)
Imprimir(saldo, nivel)