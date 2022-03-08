import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers';

export interface Product {
  id: number;
  code: string;
  title: string;
}

// id is a number
// code is an uppercase string
// title is a string with spaces replaced with underscores and a maximum length of 12 characters
export function createProduct(product: Product) {
  return {
    id: product.id,
    code: makeUppercase(product.code),
    title: limitLength(12, replaceSpaces(product.title)),
  };
}
