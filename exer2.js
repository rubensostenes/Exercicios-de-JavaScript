/*

2) O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para uma indicação sobre a condição de peso de uma pessoa adicional. 

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um animal que dá o peso e a altura de um adulto mais sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Pesos normais;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

function IMC(peso, altura){
    return peso / (altura * altura);
}

const calculo = IMC(96.4, 1.68);

console.log(IMC(96.4, 1.68).toFixed(2));