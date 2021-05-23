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
}

export { Calculadora };
