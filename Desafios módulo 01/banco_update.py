import textwrap

def menu():
    menu = """
    ===== Menu =====
    1 - Extrato
    2 - Depósito
    3 - Saque
    4 - Criar Usuário
    5 - Criar Conta
    6 - Listar Contas
    7 - Sair
    ================

    Número da opção: """

    return int(input(textwrap.dedent(menu)))

def add_user(usuarios):
    cpf = input("\nDigite seu CPF: ")
    user = checar_usuario(cpf, usuarios)

    if user:
        print("\nEste CPF já está em uso")
        return
    
    nome = input("Digite seu nome: ")
    data_nasc = input("Informe sua data de nascimento: ")
    endr = input("Digite seu endereço: ")

    usuarios.append({"nome": nome, "data_nascimento": data_nasc, "cpf": cpf, "endereco": endr})

    print("\nUsuário cadastrado com sucesso!")

def checar_usuario(cpf, usuarios):
    usuarios_filtrados = [usuario for usuario in usuarios if usuario["cpf"] == cpf]
    return usuarios_filtrados[0] if usuarios_filtrados else None

def add_conta(agencia, num_conta, usuarios):
    cpf = input("\nInforme o CPF: ")
    usuario = checar_usuario(cpf, usuarios)

    if usuario:
        print("\nConta criada com sucesso!")
        return {"agencia": agencia, "numero_conta": num_conta, "usuario": usuario}

    print("\nUsuário não encontrado!")

def listar_contas(contas):
    for conta in contas:
        linha = f"""
            Agência: {conta['agencia']}
            C/C: {conta['numero_conta']}
            Titular: {conta['usuario']['nome']}
        """
        print(textwrap.dedent(linha))

def exibir_extrato(saldo, /, *, extrato):
    print("\n===== Extrato =====")
    print("Ainda não foram realizadas transações" if not extrato else extrato)
    print(f"Saldo: R$ {saldo:.2f}")
    print("===================")

def depositar(saldo, valor, extrato, /):
    if valor > 0:
        saldo += valor
        extrato += f"Depósito: R$ {valor:.2f}\n"
        print("\nDepósito realizado com sucesso!")
    else:
        print("\nValor inválido")

    return saldo, extrato

def sacar(*, saldo, valor, extrato, limite, saques, limite_saques):
    exce1 = valor > saldo
    exce2 = valor > limite
    exce3 = saques >= limite_saques

    if exce1:
        print("\nValor inserido acima do total em depósito")
    elif exce2:
        print("\nValor inserido acima do limite permitido")
    elif exce3:
        print("\nAs oportunidades de saque diárias já foram utilizadas")
    elif valor > 0:
        saldo -= valor
        extrato += f"Saque: R$ {valor:.2f}\n"
        saques += 1
        print("\nSaque realizado com sucesso!")
    else:
        print("\nInsira um valor válido")

    return saldo, extrato

def main():
    LIMITE_SAQUES = 3
    AGENCIA = "0001"

    saldo = 0
    limite = 500
    extrato = ""
    saques = 0
    usuarios = []
    contas = []

    while True:
        opc = menu()

        if opc == 7:
            break

        elif opc == 1:
            exibir_extrato(saldo, extrato=extrato)

        elif opc == 2:
            valor = float(input("\nInsira o valor para o depósito: "))
            saldo, extrato = depositar(saldo, valor, extrato)

        elif opc == 3:
            valor = float(input("\nInsira o valor para o saque: "))

            saldo, extrato = sacar(
                saldo=saldo,
                valor=valor,
                extrato=extrato,
                limite=limite,
                saques=saques,
                limite_saques=LIMITE_SAQUES,
            )

        elif opc == 4:
            add_user(usuarios)

        elif opc == 5:
            num_conta = len(contas) + 1
            conta = add_conta(AGENCIA, num_conta, usuarios)

            if conta:
                contas.append(conta)

        elif opc == 6:
            listar_contas(contas)

        else:
            print("\nOpção Inválida. Tente novamente")

main()