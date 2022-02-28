/*var idade = 22; 
if (idade < 18) {
    console.log('Você ainda não atingiu a maioridade!');
} else {
    console.log('Você atingiu a maioridade!')
}*/


//estrutura condicional aninhada
var idade = 18;
console.log(`Você tem ${idade} anos.`) 
if (idade < 16) {
    console.log('Portanto, você não vota!');
} else if (idade < 18 || idade > 65){
    console.log('Portanto, seu voto é opcional!');
} else {
    console.log('Portanto, seu voto é obrigatório!');
}