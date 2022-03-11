import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers';

it('makes uppercasing', () => {
  expect(makeUppercase('string')).toBe('STRING');
});

it('replaces spaces', () => {
  expect(replaceSpaces('s tring')).toBe('s_tring');
});

it('limits lenght', () => {
  expect(limitLength(2, 'string')).toBe('st');
});
