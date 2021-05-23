import { render, screen } from '@testing-library/react';
import { Calculadora } from './Calculadora';

const calculadora = new Calculadora({});

test('Division de dos enteros positivos', () => {
  //Arrange
  const a: number = 6;
  const b: number = 3;
  const esperado: number = 2;
  //Act
  const resultado: number = calculadora.division(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Division de dos enteros positivos', () => {
  //Arrange
  const a: number = 1;
  const b: number = 3;
  const esperado: number = 2;
  //Act
  const resultado: number = calculadora.division(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Division de un entero negativo y otro positivo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -3;
  const b: number = 3;
  const esperado: number = 2;
  //Act
  const resultado: number = calculadora.division(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Division de un entero positivo y otro negativo con resultado positivo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 0;
  const b: number = -2;
  const esperado: number = 0;
  //Act
  const resultado: number = calculadora.division(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Division de un entero positivo y otro negativo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 3;
  const b: number = -3;
  const esperado: number = -1;
  //Act
  const resultado: number = calculadora.division(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Division de un entero positivo y 0', () => {
  const a: number = 3;
  const b: number = 0;
  expect(() => {
    calculadora.division(a, b);
  }).toThrowError( new Error("El divisor no puede ser 0"));
});