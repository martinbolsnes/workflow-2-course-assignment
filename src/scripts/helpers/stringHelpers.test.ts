import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers';

it('makes uppercasing', () => {
  expect(makeUppercase('string')).toEqual('STRING');
});

it('replaces spaces', () => {
  expect(replaceSpaces('s tring')).toEqual('s_tring');
});

it('limits lenght', () => {
  expect(limitLength(2, 'string')).toEqual('st');
});
