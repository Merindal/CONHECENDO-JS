// 1. Declaração de Variáveis
// a) Declarar variáveis
let idade = 25; // número
let nome = "Ana"; // texto
let estudante = true; // booleano

// b) Exibir valores no console
console.log("Exibindo Resultado :");
console.log("Idade:", idade);
console.log("Nome:", nome);
console.log("Estudante:", estudante);

// c) Alterar valor da variável idade e mostrar novamente
idade = 30;
console.log("Exibindo novo Resultado :");
console.log("Idade:", idade);
console.log("Nome:", nome);
console.log("Estudante:", estudante);


// 2. Testando Tipos de Dados
console.log("\nTipos de dados usando typeof:");
console.log("Tipo de idade:", typeof idade); // number
console.log("Tipo de nome:", typeof nome); // string
console.log("Tipo de estudante:", typeof estudante); // boolean


// Testar atribuir número em formato string
let numeroString = "100";
console.log("Valor de numero em String:", numeroString);
console.log("Tipo de numero em String:", typeof numeroString); // string


// 3. Operadores Aritméticos
let num1 = 10;
let num2 = 3;

console.log("\nOperações aritméticas:");
console.log(`${num1} + ${num2} =`, num1 + num2);
console.log(`${num1} - ${num2} =`, num1 - num2);
console.log(`${num1} * ${num2} =`, num1 * num2);
console.log(`${num1} / ${num2} =`, num1 / num2);
console.log(`${num1} % ${num2} =`, num1 % num2);


// 4. Operadores Relacionais
console.log("\nComparações entre num1 e num2:");
console.log(`${num1} > ${num2}:`, num1 > num2);
console.log(`${num1} < ${num2}:`, num1 < num2);
console.log(`${num1} >= ${num2}:`, num1 >= num2);
console.log(`${num1} <= ${num2}:`, num1 <= num2);
console.log(`${num1} == ${num2}:`, num1 == num2);
console.log(`${num1} === ${num2}:`, num1 === num2);

// Explicação diferença entre '==' e '==='
console.log("\nDiferença entre '==' e '===':");
console.log("'==' compara valores após coerção de tipo.");
console.log("'===' compara valores e tipos, sem coerção.");

let a = 5;
let b = "5";
console.log(`a == b: ${a == b}`);   // true, porque 'b' é convertido para número
console.log(`a === b: ${a === b}`); // false, tipos diferentes


// 5. Operadores Lógicos
console.log("\nOperadores lógicos:");

let cond1 = true;
let cond2 = false;

console.log(`cond1 && cond2: ${cond1 && cond2}`); // false
console.log(`cond1 || cond2: ${cond1 || cond2}`); // true
console.log(`!cond1: ${!cond1}`);                 // false
console.log(`!cond2: ${!cond2}`);                 // true

// Combinações lógicas
console.log(`(cond1 && !cond2) || (cond2 && !cond1): ${(cond1 && !cond2) || (cond2 && !cond1)}`);


// 6. Boas Práticas
// a) Nomes claros e descritivos
let idadeUsuario = 30;
const nomeCompleto = "Ana Silva";
let estaEstudando = true;

// b) Uso adequado de let e const
// 'const' para valores que não mudam
// 'let' para valores que podem ser alterados

console.log("\nBoas práticas:");
console.log("Idade do usuário:", idadeUsuario);
console.log("Nome completo:", nomeCompleto);
console.log("Está estudando:", estaEstudando);