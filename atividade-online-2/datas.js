let dataHoje = new Date(); // Salvando a data atual
let dataEventoString = new Date("2021-06-28"); // Salvando a data do evento com uma string
let dataEventoArg = new Date(2022, 7, 28); // Salvando a data do evento com argumentos numericos

// listaMeses=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","set","Out","Nov","Dez"]

console.log("Adata de hoje eh:", dataHoje);
console.log("0aniversario do Thiago eh:", dataEventoString);
console.log("0aniversario do Thiago eh:", dataEventoArg);

if (dataEventoString > dataHoje) {
  console.log("Adata do evento eh valida");
} else {
  console.log("Data invalida");
}
I;
