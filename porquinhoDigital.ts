export class PorquinhoDigital {
    saldo: number;
    objetivo: number;

    constructor(saldo: number, objetivo: number) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    retirar(valor: number) {
        if (valor > this.saldo) {
            console.log(`Saldo Insuficiente!`);
        } else {
            console.log(`Retirado com sucesso!`);
        }
    }

    definir(valor: number) {
        this.objetivo = valor;
    }

    verificarProgresso() {
        const resultado = (this.saldo / this.objetivo) * 100;
        console.log(`Seu progresso está em: ${resultado}%.`)
    }
}

const conta = new PorquinhoDigital(0, 100);
console.log(`O saldo é: ${conta.saldo}`);
console.log(`O objetivo é: ${conta.objetivo}`);
conta.verificarProgresso();
conta.definir(200);
conta.depositar(400);
conta.retirar(100);
conta.verificarProgresso();