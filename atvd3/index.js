// 1. Verificar número positivo, negativo ou zero
let num = prompt("Digite um número:");
num = parseFloat(num);
if (num > 0) {
    console.log("O número é positivo.");
} else if (num < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
// 2. Classificar idade
let idade = prompt("Digite a idade:");
idade = parseInt(idade);
if (idade >= 0 && idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
} else if (idade >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}
// 3. Tabuada de 1 a 10
let numero = prompt("Digite um número:");
numero = parseInt(numero);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// 4. Números pares de 1 a 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
// 5. Soma de 1 até o número usando while
let n = prompt("Digite um número:");
n = parseInt(n);
let soma = 0;
let i = 1;
while (i <= n) {
    soma += i;
    i++;
}
console.log(`A soma de 1 até ${n} é ${soma}`);// 6. Dia da semana
let dia = prompt("Digite um número de 1 a 7:");
dia = parseInt(dia);
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
}
// 7. Classificação de nota
let nota = prompt("Digite uma nota de 0 a 10:");
nota = parseInt(nota);
switch (true) {
    case (nota >= 0 && nota <= 4):
        console.log("Insuficiente");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("Regular");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Bom");
        break;
    case (nota >= 9 && nota <= 10):
        console.log("Ótimo");
        break;
    default:
        console.log("Nota inválida");
}
// 8. Mensagem sobre fruta
let fruta = prompt("Digite o nome de uma fruta:");
fruta = fruta.toLowerCase();
switch (fruta) {
    case "banana":
        console.log("Banana custa R$ 3,00 o quilo");
        break;
    case "maçã":
        console.log("Maçã custa R$ 5,00 o quilo");
        break;
    case "laranja":
        console.log("Laranja custa R$ 2,50 o quilo");
        break;
    default:
        console.log("Fruta não cadastrada");
}
// 9. Mês correspondente
let mes = prompt("Digite um número de 1 a 12:");
mes = parseInt(mes);
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número inválido");
}
// 10. Menu de lanchonete
let opcao;
do {
    console.log("1 - Hambúrguer");
    console.log("2 - Pizza");
    console.log("3 - Refrigerante");
    console.log("4 - Sair");
    opcao = prompt("Escolha uma opção:");
    opcao = parseInt(opcao);
    switch (opcao) {
        case 1:
            console.log("Você pediu Hambúrguer");
            break;
        case 2:
            console.log("Você pediu Pizza");
            break;
        case 3:
            console.log("Você pediu Refrigerante");
            break;
        case 4:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== 4);