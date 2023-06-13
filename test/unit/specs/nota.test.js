const Nota = require('../../../src/models/nota');

describe('mediaCA()', () => {
  test('deve retornar SR quando a média final for menor que 0.1', () => {
    const nota = new Nota('matematica', 0, 0, 0);
    expect(nota.mediaCA()).toBe('SR');
  });
  test('deve retornar II quando a média final for maior ou igual a 0.1 e menor que 3', () => {
    const nota = new Nota('matematica', 0.1, 0.1, 0.1);
    expect(nota.mediaCA()).toBe('II');
  });
  test('deve retornar MI quando a média final for maior ou igual a 3 e menor que 5', () => {
    const nota = new Nota('matematica', 3, 3, 4);
    expect(nota.mediaCA()).toBe('MI');
  });
  test('deve retornar MM quando a média final for maior ou igual a 5 e menor que 7', () => {
    const nota = new Nota('matematica', 5, 5, 6);
    expect(nota.mediaCA()).toBe('MM');
  });
  test('deve retornar MS quando a média final for maior ou igual a 7 e menor que 9', () => {
    const nota = new Nota('matematica', 7, 7, 8);
    expect(nota.mediaCA()).toBe('MS');
  });
  test('deve retornar SS quando a média final for maior ou igual a 9 e menor ou igual a 10', () => {
    const nota = new Nota('matematica', 9, 9, 9);
    expect(nota.mediaCA()).toBe('SS');
  });
});
