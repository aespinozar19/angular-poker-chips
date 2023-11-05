import { Injectable } from '@angular/core';
import { Color, Money, PokerChip } from '../interfaces/poker-chip.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChipsServices {

  private chips: PokerChip[] = [];
  private quantityPlayers: number = 0;
  private money: Money[] = [];
  private AmountPerPerson : number = 0;

  constructor() {
    this.setInitialChips();
    this.setInitialMoney();
  }

  getMoney(): Money[] {
    return this.money;
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

  getChips(): Observable<PokerChip[]> {
    return of( this.chips );
  }

  pokerChipDealer(): void {

  }

  setInitialChips(): void {
    this.chips.push(
      { color: Color.blue, value: 1, quantityAvailable: 0 },
      { color: Color.pink, value: 2, quantityAvailable: 0 },
      { color: Color.red, value: 4, quantityAvailable: 0 },
      { color: Color.white, value: 10, quantityAvailable: 0 },
    );
  }

  setInitialMoney(): void {
    this.money.push(
      { description: 'Sol',simbol: 'S/' },
      { description: 'Dólar estadounidense',simbol: 'US$' },
      { description: 'Euro',simbol: '€' },
      { description: 'Yen japonés',simbol: '¥' },
    )
  }




}
