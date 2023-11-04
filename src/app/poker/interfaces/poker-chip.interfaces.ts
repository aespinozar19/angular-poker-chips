
export interface PokerChip {
  color: string;
  value: number;
  imgBase64?: string;
  quantityAvailable: number;
  quantityPerPerson?: number;
}

export interface Money {
  description: string;
  simbol: string;
}
