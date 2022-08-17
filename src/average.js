/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const average = (numbersArray) => {
  const isANumber = numbersArray.every(element => typeof element === 'number');
  if (isANumber === true && numbersArray.length !== 0) {
    let count = 0;
    for (const number of numbersArray) {
      count += number;
    }
    const resolution = Math.round(count/numbersArray.length);
    // console.log(resolution);
    return resolution;
  } 
};


module.exports = average;
