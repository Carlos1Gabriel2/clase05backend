/*
Definir una clase Cuenta Bancaria que permita realizar depósitos, retiros y 
consultar el saldo

*/
//ALT + 96 --> para usar estas comillas ``

class CuentaBancaria {

    constructor(saladoInicial){
        this.saldo = saladoInicial;
    }

    depositar(cantidad){
        this.saldo += cantidad;  
        console.log(`Has depositado $${cantidad}. Saldo actual: $${this.saldo}.`);   
    }

    retirar(cantidad){
        if(cantidad > this.saldo){
            console.log('Fondos insuficientes. ');
        }else{
            this.saldo -= cantidad;
            console.log(`Has retirado $${cantidad}. Saldo actual: $${this.saldo}.`);
        }
    }

    consultarSaldo(){
        console.log(`Saldo actual: $${this.saldo}.`);
    }

}

const cuenta1 = new CuentaBancaria(100);
cuenta1.depositar(50);
cuenta1.retirar(30);
cuenta1.consultarSaldo();
cuenta1.retirar(200);