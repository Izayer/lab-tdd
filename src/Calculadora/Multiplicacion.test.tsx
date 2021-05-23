import { render, screen } from '@testing-library/react';
import { Calculadora } from './Calculadora';

const calculadora = new Calculadora({});

test('Multiplicación de dos enteros positivos', () => {
  //Arrange
  const a: number = 2;
  const b: number = 3;
  const esperado: number = 6;
  //Act
  const resultado: number = calculadora.multiplicacion(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Multiplicación de un entero negativo y otro positivo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -1;
  const b: number = 3;
  const esperado: number = -3;
  //Act
  const resultado: number = calculadora.multiplicacion(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Multiplicación de un entero positivo y otro negativo con resultado negativo', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = 4;
  const b: number = -2;
  const esperado: number = -8;
  //Act
  const resultado: number = calculadora.multiplicacion(a,b);
  //Assert
  expect(resultado).toBe(resultado);
});

test('Comprobar la propiedad conmutativa', () => {
  //Arrange
  render(<Calculadora />);
  const a: number = -4;
  const b: number = 3;
  //Act
  const resultado1: number = calculadora.multiplicacion(a,b);
  const resultado2: number = calculadora.multiplicacion(b,a);
  //Assert
  expect(resultado1).toBe(resultado2);
});