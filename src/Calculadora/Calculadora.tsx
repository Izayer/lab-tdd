import React from 'react';
import './Calculadora.css';

class Calculadora extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }

  suma(a: number, b:number): number {
    return a + b;
  }

  resta(a: number, b:number): number {
    return a - b;
  }

  multiplicacion(a: number, b:number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("El divisor no puede ser 0");     
    } else {
      return a / b;
    }
  }

  raiz(a: number): number {
    if (a < 0) {
      throw new Error("El radicando no puede ser un numero negativo")
    } else if (a === 0 || a === 1){
      return a
    } else {
      return this.bakhshali(a);
    }
  }

  bakhshali(a: number): number {
    let n: number = 0;
    for (let i = 0; i <= a; i++){
      if ( (i * i) === a) {
        return n;
      } else if ((i * i) < a) {
        n = i;
      } else if ( (i * i ) > a) {
        if ( Math.abs(((i - 1) * (i -1)) - a) > Math.abs(((i) * (i)) - a) ) {
          n = i;
        }
        break;
      } 
    }

    let numeradorUno = n ** 4;
    let numeradorDos = this.multiplicacion(6, n ** 2);
    numeradorDos = this.multiplicacion(numeradorDos, a);
    let numeradorTres = a ** 2
    let numerador = this.suma(numeradorUno, numeradorDos);
    numerador = this.suma(numerador, numeradorTres);
    
    let denominadorUno = this.multiplicacion(4, n ** 3);
    let denominadorDos = this.multiplicacion(4, n);
    denominadorDos = this.multiplicacion(denominadorDos, a);
    let denominador = this.suma(denominadorUno, denominadorDos);

    let bakhshali = this.division(numerador, denominador);

    return bakhshali;
  }
}

export { Calculadora };
