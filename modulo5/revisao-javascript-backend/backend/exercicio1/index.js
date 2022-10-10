function converterCelsius(degree, scale) {
    if (typeof degree !== 'number') {
      return "O grau deve ser passado em formato de número";
    } else {
      if (scale === "F") {
        const celsiusParaFahrenheit = degree * (9 / 5) + 32;
        return `${degree}° Celsius é equivalente a ${celsiusParaFahrenheit}° Fahrenheit.`;
      } else if (scale === "K") {
        const celsiusParaKelvin = degree + 273.15;
        return `${degree}° Celsius é equivalente a ${celsiusParaKelvin}° Kelvin.`;
      } else {
        return "Parâmetro inválido: deve passar F para converter para Fahrenheit ou K para converter para Kelvin.";
      }
    }
  }
  
  console.log(converterCelsius(30, "F")); // output : “30° Celsius é equivalente a 86° Farenheit.”