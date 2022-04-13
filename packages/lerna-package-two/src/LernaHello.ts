export function lernaHelloTwo(a: number): number {
  console.log('lerna Hello');
  return a*a;
}
export function lernaGoodbyeTwo(a: number): number {
  console.log('lerna Goodbye')
  return a/2;
}

export interface Type2 {
    a: number;
    d: string;
}

export type Type1 = {
    a: number;
    d: string;
}