function numeros(firstNumber, lastNumber) {
  if (firstNumber === lastNumber) {
    console.log(`Os numeros ${firstNumber}, ${lastNumber} são iguais`)
  } else {
    console.log(`Os numeros ${firstNumber}, ${lastNumber} não são iguais`)
  }

  soma = firstNumber + lastNumber
  if (soma > 10 && soma <= 20) {
    console.log(`A soma é ${soma}, que é maior que 10 e menor que 20. `)
  } else {
    console.log(`A soma é ${soma}`)
  }
}

numeros(6, 6)
