// Desafio classificando nível de herói
let nomeHeroi = "Pianissoli"
let pontosXP = 6345
let ranque = ""


if(pontosXP <= 1000){
    ranque = "Ferro"
    console.log("Seu ranque atual é: Ferro")
}else if(pontosXP >= 1001 && pontosXP <= 2000){
    ranque = "Bronze"
    console.log("Seu ranque atual é: Bronze")
}else if(pontosXP >= 2001 && pontosXP <= 6000){
    ranque = "Prata"
    console.log("Seu ranque atual é: Prata")
}else if(pontosXP >= 6001 && pontosXP <= 7000){
    ranque = "Ouro"
    console.log("Seu ranque atual é: Ouro")
}else if(pontosXP >= 7001 && pontosXP <= 8000){
    ranque = "Platina"
    console.log("Seu ranque atual é: Platina")
}else if(pontosXP >= 8001 && pontosXP <= 9000){
    ranque = "Ascendente"
    console.log("Seu ranque atual é: Ascendente")
}else if(pontosXP >= 9001 && pontosXP <= 10000){
    ranque = "Imortal"
    console.log("Seu ranque atual é: Imortal")
}else if(pontosXP >= 10001){
    ranque = "Radiante"
    console.log("Seu ranque atual é: Radiante")
}

console.log("O Herói de nome '" + nomeHeroi + "' está no ranque '" + ranque + "'")