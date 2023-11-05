import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Money, PokerChip } from '../../interfaces/poker-chip.interfaces';
import { ChipsServices } from '../../services/chips.services.service';

@Component({
  selector: 'chip-dealer-page',
  templateUrl: './chip-dealer-page.component.html',
  styleUrls: ['./chip-dealer-page.component.css']
})
export class ChipDealerPageComponent implements OnInit {

  public chips: PokerChip[] = [];
  public money: Money[] = this.chipsServices.getMoney();
  public moneySimbol: string = 'S/.';



  public myForm: FormGroup = this.fb.group({
    quantityPlayers: [4, [ Validators.required, Validators.min(2)]],
    amount: [100, [ Validators.required, Validators.min(10) ]],
    money: ['soles', [ Validators.required ]],
    moneySimbol: ['S/ ', [ Validators.required ]],
    chips: this.fb.array(this.chips),
  });

  constructor(
    private fb: FormBuilder,
    private chipsServices: ChipsServices,
  ) {}


  ngOnInit(): void {
    this.chipsServices.getChips()
      .subscribe( chips => this.chips = chips );
    console.log( this.chips );
  }

  changeTypeMoney(e: any) {
    console.log( e );
  }

}
