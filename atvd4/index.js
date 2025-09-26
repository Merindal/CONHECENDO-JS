

// 1. 
let colegas = ['merinda', 'lux', 'soraka', 'nasus', 'annie'];
console.log('1. Nomes de colegas:', colegas);

// 2. 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('2. Números pares:');
for (let num of numeros) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 3.
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = arrayNumeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log('3. Soma dos 10 números:', soma);

// 4.
let listaNomes = ['merinda', 'lux', 'soraka', 'nasus', 'annie'];
let nomeUsuario = prompt('Digite um nome para verificar:'); 
if (listaNomes.includes(nomeUsuario)) {
  console.log(`4. Nome '${nomeUsuario}' encontrado na lista!`);
} else {
  console.log(`4. Nome '${nomeUsuario}' não encontrado na lista. `);
}


let arrayOriginal = [1, 2, 3, 4, 5];
let arrayInvertido = [...arrayOriginal].reverse(); 
console.log('5. Array original:', arrayOriginal);
console.log('5. Array invertido:', arrayInvertido);

// 6.
let pessoa = {
  nome: 'Jeniffer Lima',
  idade: 30,
  profissao: 'Desenvolvedor'
};
console.log('6. Informações da pessoa:', pessoa);

// 7.
let carro = {
  modelo: 'Fusca',
  ano: 1970,
  cor: 'Azul',
  exibirInfo: function() {
    console.log(`7. Meu carro é um ${this.modelo} do ano ${this.ano}, na cor ${this.cor}.`);
  }
};
carro.exibirInfo();

// 8.
let alunos = [
  { nome: 'louise', nota: 8.5 },
  { nome: 'merinda', nota: 6.0 },
  { nome: 'amumu', nota: 7.5 },
  { nome: 'annie', nota: 9.0 },
  { nome: 'Lucas', nota: 5.5 }
];
console.log('8. Alunos com nota >= 7:');
alunos.filter(aluno => aluno.nota >= 7).forEach(aluno => {
  console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});

// 9.
let objetoExistente = {
  nome: 'merinda',
  idade: 30
};
objetoExistente.endereco = 'Rua das Flores, 123';
console.log('9. Objeto após adicionar endereço:', objetoExistente);

// 10.
let produto = {
  nome: 'doce de leite',
  preco: 10.50,
  quantidade: 20
};
function calcularTotalEmEstoque(prod) {
  return prod.preco * prod.quantidade;
}
console.log('10. Valor total em estoque:', calcularTotalEmEstoque(produto));


// 11. 
function somar(a, b) {
  return a + b;
}
console.log('11. Soma de 5 + 3:', somar(5, 3));

// 12.
function verificarParImpar(numero) {
  return numero % 2 === 0 ? 'Par' : 'Ímpar';
}
console.log('12. O número 4 é:', verificarParImpar(4));
console.log('12. O número 7 é:', verificarParImpar(7));

// 13.
function encontrarMaior(array) {
  return Math.max(...array);
}
let arrayTeste = [3, 7, 2, 9, 1];
console.log('13. Maior número no array:', encontrarMaior(arrayTeste));

// 14.
function mensagemBoasVindas(nome) {
  return `Bem-vindo(a), ${nome}!`;
}
console.log('14. Mensagem:', mensagemBoasVindas('Merinda'));

// 15. 
function fatorial(numero) {
  if (numero <= 1) {
    return 1;
  }
  return numero * fatorial(numero - 1);
}
console.log('15. Fatorial de 5:', fatorial(5));