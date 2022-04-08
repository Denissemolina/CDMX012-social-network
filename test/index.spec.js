import { register } from '../src/components/register.js';

jest.mock('../src/post/firebase-imports.js');

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});
