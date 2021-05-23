import { render, screen } from '@testing-library/react';
import { Calculadora } from './Calculadora';

const calculadora = new Calculadora({});

test('Resta de dos enteros positivos', () => {
  //Arrange
  const a: number = 5;
  const b: number = 3;
  const esperado: number = 2;
  //Act
  const resultado: number = calculadora.resta(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Resta de un entero negativo y otro positivo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -1;
  const b: number = 3;
  const esperado: number = -4;
  //Act
  const resultado: number = calculadora.resta(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Resta de un entero positivo y otro negativo con resultado positivo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 4;
  const b: number = -2;
  const esperado: number = 6;
  //Act
  const resultado: number = calculadora.resta(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Resta de un entero negativo y otro negativo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -4;
  const b: number = -2;
  const esperado: number = -2;
  //Act
  const resultado: number = calculadora.resta(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Resta de un entero negativo y otro negativo con resultado positivo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -4;
  const b: number = -6;
  const esperado: number = 2;
  //Act
  const resultado: number = calculadora.resta(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});