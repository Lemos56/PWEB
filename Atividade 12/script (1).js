function Retangulo(x, y) {
    this.x = x; // a marca do objeto que for criado
    this.y = y;

    this.calcArea = function (x, y) {
        return x * y;
    }
}

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(newNomeCorrentista) {
        this._nomeCorrentista = newNomeCorrentista;
    }

    get banco() {
        return this._banco;
    }

    set banco(newBanco) {
        this._banco = newBanco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(newNumeroConta) {
        this._numeroConta = newNumeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(newSaldo) {
        this._saldo = newSaldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo)
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(newSaldoEspecial) {
        this._saldoEspecial = newSaldoEspecial;
    }
}

class Poupança extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo)
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(newJuros) {
        this._juros = newJuros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(newDataVencimento) {
        this._dataVencimento = newDataVencimento;
    }
}
