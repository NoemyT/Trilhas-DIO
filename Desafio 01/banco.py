menu = """
===== Menu =====
1 - Extrato
2 - Depósito
3 - Saque
4 - Sair
================

Número da opção: """

extrato = ""
saldo = 0
limite = 500
saques = 0
LIMITE_SAQUES = 3

while True:

    op = int(input(menu))

    if op == 4:
        break

    elif op == 1:
        print("\n===== Extrato =====")
        print("Ainda não foram realizadas transações" if not extrato else extrato)
        print(f"Saldo: R$ {saldo}")
        print("===================")

    elif op == 2:
        valor = float(input("\nInsira o valor para o depósito: "))

        if valor > 0:
            saldo += valor
            extrato += f"Depósito: R$ {valor:.2f}\n"
        else:
            print("Valor inválido")
    
    elif op == 3:
        valor = float(input("\nInsira o valor para o saque: "))

        exce1 = valor > saldo
        exce2 = valor > limite
        exce3 = saques >= LIMITE_SAQUES

        if exce1:
            print("\nValor inserido acima do total em depósito")
        elif exce2:
            print("\nValor inserido acima do limite permitido")
        elif exce3:
            print("\nAs oportunidades de saque diárias já foram utilizadas")
        elif valor > 0:
            saldo -= valor
            extrato += f"Saque: R$ {valor}\n"
            saques += 1
        else:
            print("\nInsira um valor válido")
            

    else:
        print("Opção Inválida. Tente novamente")