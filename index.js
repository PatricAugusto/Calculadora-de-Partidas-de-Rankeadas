let derrotas = 2;
let vitorias = 20;
let saldoGame = vitorias - derrotas;

function gameSet(vitorias, derrotas) {
    let saldoGame = vitorias - derrotas;

    if(vitorias < 10){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Ferro`)
    }else if(vitorias >= 11 && vitorias <= 20){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Bronze`)
    }else if(vitorias >= 21 && vitorias <= 50){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Prata`)
    }else if(vitorias >= 81 && vitorias <= 90){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Ouro`)
    }else if(vitorias >= 91 && vitorias >= 100){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Diamente`)
    }else if(vitorias >= 101){
        console.log(`O Herói tem de saldo de ${saldoGame}  está no nível de Imortal`)
    }else{
        console.log("ERROR")
    }
}

gameSet(vitorias, derrotas);