import { Injectable } from '@angular/core';
import { Money, PokerChip } from '../interfaces/poker-chip.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChipsServicesTsService {

  private chips: PokerChip[] = [];
  private quantityPlayers: number = 0;
  private money?: Money;
  private AmountPerPerson : number = 0;

  setMoney( money: Money ): void {
    this.money = money;
  }

  setQuantityPlayers( quantity: number ): void {
    this.quantityPlayers = quantity;
  }

  setChips( chips: PokerChip[] ): void {
    this.chips = chips;
  }

  setAmountPerPerson( amout: number ): void {
    this.AmountPerPerson = amout;
  }

  // constructor() { }



}
