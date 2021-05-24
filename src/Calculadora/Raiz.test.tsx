import { render, screen } from '@testing-library/react';
import { Calculadora } from './Calculadora';

const calculadora = new Calculadora({});

test('Raíz cuadrada de un entero positivo', () => {
  //Arrange
  const a: number = 47;
  const esperado: number = 6.8556546004010441249358714490848;
  const tolerancia: number = 0.001
  //Act
  const resultado: number = calculadora.raiz(a);
  //Assert
  expect(Math.abs(resultado - esperado)).toBeLessThan(tolerancia);
});


test('Raíz cuadrada de un entero negativo', () => {
  const a: number = -4;
  expect(() => {
    calculadora.raiz(a);
  }).toThrowError( new Error("El radicando no puede ser un numero negativo"));
});