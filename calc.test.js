const calc = require('./calc');
const myMock = jest.fn();

test('addition 1 + 2 est égale à 3', () => {
   expect(calc.addition(1, 2)).toBe(3);
});

test('soustraction 1 - 2 est égale à -1', () => {
   expect(calc.soustraction(1, 2)).toBe(-1);
});

test('multiplication 1 x 2 est égale à 2', () => {
   expect(calc.multiplication(1, 2)).toBe(2);
});

test('addition 1 / 2 est égale à 0.5', () => {
   expect(calc.division(1, 2)).toBe(0.5);
});

test('86400sec entre 2 jours', () => {
    myMock.mockReturnValue(new Date(2000, 0, 2));
   expect(calc.date2000(myMock())).toEqual(86400);
});

test('3600sec entre 2 heures', () => {
    const nextHour = new Date(2000, 0, 1, 1, 0, 0);
   expect(calc.date2000(nextHour)).toEqual(3600);
});