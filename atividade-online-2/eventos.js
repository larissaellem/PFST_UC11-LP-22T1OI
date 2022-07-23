let prompt = require("prompt-sync")();
console.log("Faça o cadastro do seu evento!");

let dataHoje = new Date();
let dataDoEvento = new Date(prompt("Informe a data do evento: "));

if (dataDoEvento < dataHoje) {
  console.log("Informe uma data válida");
  process.exit(0);
}

let idade = prompt("Digite sua idade: ");
if (idade < 18) {
  console.log("Cadastro para maiores de 18 anos. Tente novamente.");
  process.exit(0);
}

let participantes = parseInt(prompt("Insira a quantidade de partcipantes: "));
if (participantes > 100) {
  console.log("Quantidade de participantes excedida, tente novamente.");
  process.exit(0);
}

console.log("Cadastro realizado com sucesso!");
