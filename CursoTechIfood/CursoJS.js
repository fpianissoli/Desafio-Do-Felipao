console.log("Qual seu nickname")

//nome do jogador
let nickname = "Fellipe"

// concatenando uma mensagem + variável
console.log("Bem Vindo " + nickname)
console.log(nickname + " entrou no servidor")

// estudo de constante
const notificacao = "Pokemon Go diz:"
console.log(notificacao + " tem um novo pokemon na região")
console.log(notificacao + " você foi derrotado por um líder de ginásio")

let poteCafe = "Café pilão"
let poteAcucar = "Açucar união"
let poteBiscoito = "Trakinas"

console.log("Na cozinha da vóvó hoje tem: " + )

// Criando tela pokemon

let NomePokemon = "Pikachu"
let LevelPokemon = 35
let HPPokemon = 45
let SexoPokemon = "M"
let ImagemPokemon
let Selecionavel = true



let pokemon = ["Pikachu", "Charmander",]

// matrizes
let nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"]
let timePokemon = [
  ["pikachu", "M", 1],
  ["Chamander", "F", 3]
]

// acessando a matriz
console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] + 
" e está no nível " + timePokemon[1][2] )


// operadores

let idade = 30
console.log(idade)
idade = 30 / 2
console.log(idade)

// IF, Else, Else If

// exemplo 1
if (caminhoEsquerdo === 'obstaculo') {
  // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
  seguirCaminhoDireito();
} else if (caminhoEsquerdo === 'ponteQuebrada') {
  // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
  procurarOutroCaminho();
} else {
  // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
  seguirCaminhoEsquerdo();
}

// exemplo 2
let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

// exemplo 3
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}

// switch case/break/default (alternativa para if, else if, else)

let fruta = "uva"

switch(fruta){
  case "laranja":
    console.log("Suco de Laranja")
    break

  case "banana":
    console.log("Vitamina de banana")
    break
  case "maça":
    console.log("suco de maça")
    break
  default:
  console.log("Suco Padrão")
}

// laços de repetição FOR, WHILE, DO WHILE

for (let contador = 0; contador < 4; contador++){
  console.log(contador)
}

let pontosDeVida = 0

for(let i = 1; i <= 10 ; i++){
  pontosDeVida += 1
  console.log("Curou "+ i + " de pontos de vida")
}

console.log(pontosDeVida + " Totais ")

// while

let contador2 = 1

while(contador2 < 3){
  console.log("Executei quantas vezes " + contador2)
  contador2++
}

// do while

let contador3 = 1

do {
  console.log("executei quantas vezes " + contador3 )
  contador3++
} while (contador < 3) 