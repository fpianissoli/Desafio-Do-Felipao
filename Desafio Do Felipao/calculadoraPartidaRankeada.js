let rankedBalance = vitoryAndLose(167, 15)


function vitoryAndLose(vitory, lose){
    let result = vitory - lose
    return result
}


// Definindo ranque do Heroi

let rank

if(rankedBalance < 10){
    rank = "Ferro"    
}else if(rankedBalance >= 11 && rankedBalance <= 20){
    rank = "Bronze"
}else if(rankedBalance >= 21 && rankedBalance <= 50){
    rank = "Prata"
}else if(rankedBalance >= 51 && rankedBalance <= 80){
    rank = "Ouro"
}else if(rankedBalance >= 81 && rankedBalance <= 90){
    rank = "Diamante"
}else if(rankedBalance >= 91 && rankedBalance <= 100){
    rank = "Lendario"
}else if(rankedBalance >= 101){
    rank = "Imortal"
}

console.log("O Herói tem de saldo de " + rankedBalance + " e está no nível de " + rank)