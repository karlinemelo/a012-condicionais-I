/* Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >=18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>


let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

if(){

}else{
	
} */

const estudanteIdade = +prompt("Qual a sua idade?");
const estudanteEnsino = confirm("Vc terminou o ensino médio?");
const estudanteFaculdade = confirm("Está cursando alguma faculdade?");

if (estudanteIdade >= 18) {
  console.log("A pessoa é maior de idade");
} else {
  console.log("A pessoa é menor de idade");
}

if (estudanteEnsino) {
  console.log("Terminou o Ensino Médio.");
} else {
  console.log("Não terminou o Ensino Médio.");
}

if (estudanteFaculdade === false) {
  console.log("Nao esta cursando faculdade");
}
