
export interface PokerChip {
  color: Color;
  value: number;
  imgBase64?: string;
  quantityAvailable: number;
  quantityPerPerson?: number;
}

export enum Color{
  blue = 'blue',
  pink = 'pink',
  red = 'red',
  white = 'white',
}

export interface Money {
  description: string;
  simbol: string;
}
