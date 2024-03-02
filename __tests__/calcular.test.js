import { Sumar } from "../src/funcionalidades/calcular";

test('1 + 2 es igual a 3', () => {
    expect(Sumar(1, 2)).toBe(3);
});

test('100 + 100 es igual a 200', () => {
    expect(Sumar(1, 2)).toBe(3);
});

test('-1 + 1 es igual a 0', () => {
    expect(Sumar(1, 2)).toBe(3);
});

test('-1 + -1 es igual a -2', () => {
    expect(Sumar(1, 2)).toBe(3);
});

test('Sumar letra con numero2', () => {
    expect(Sumar("a", 2)).toBe("a2");
});