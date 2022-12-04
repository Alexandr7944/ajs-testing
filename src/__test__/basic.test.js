/* eslint-disable linebreak-style */
import calculateTotal from '../calculate';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];
  expect(calculateTotal(list)).toBe(2500);
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];
  expect(calculateTotal(list, true)).toBe(1250);
});
