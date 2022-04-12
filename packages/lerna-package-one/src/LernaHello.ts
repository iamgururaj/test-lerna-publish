export function lernaHello(a: number): number {
  console.log('lerna Hello');
  return a*a;
}
export function lernaGoodbye(a: number): number {
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