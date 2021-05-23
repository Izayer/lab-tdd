import { render, screen } from '@testing-library/react';
import Calculadora from './Calculadora';

test('Suma de dos enteros positivos', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 2;
  const b: number = 3;
  const esperado: number = 5;
  //Act
  const resultado: number = Calculadora.suma(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Suma de un entero negativo y otro positivo con resultado positivo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -1;
  const b: number = 3;
  const esperado: number = 2;
  //Act
  const resultado: number = Calculadora.suma(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Suma de un entero negativo y otro positivo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -4;
  const b: number = 3;
  const esperado: number = -1;
  //Act
  const resultado: number = Calculadora.suma(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Suma de un entero positivo y otro negativo con resultado positivo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 4;
  const b: number = -2;
  const esperado: number = 2;
  //Act
  const resultado: number = Calculadora.suma(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Suma de un entero positivo y otro negativo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 3;
  const b: number = -7;
  const esperado: number = -4;
  //Act
  const resultado: number = Calculadora.suma(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Comprobar la propiedad conmutativa', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 2;
  const b: number = 3;
  //Act
  const resultado1: number = Calculadora.suma(a,b);
  const resultado2: number = Calculadora.suma(b,a);
  //Assert
  expect(resultado1).toBe(resultado2);
});