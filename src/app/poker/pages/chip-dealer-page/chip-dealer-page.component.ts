import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    chipsAvailable: ['# fichas disp.'],
    chipValue: ['valor'],
    color: ['#563d7c']
    // chips: this.fb.array(this.chips),
  });

  constructor(
    private fb: FormBuilder,
    private chipsServices: ChipsServices,
  ) {}

  onDeleteChip( chip: PokerChip ): void {
    console.log('Eliminar item');
  }

  onSubmit(): void {
    //Recorrer los colores de fichas iniciando por el de menor cantidad
    //Dividir las fichas
  }

  ngOnInit(): void {
    this.chipsServices.getChips()
      .subscribe( chips => this.chips = chips );
    console.log( this.chips );
  }

  changeTypeMoney(e: any) {
    console.log( e );
  }

  get pokerChipColor() {
    return this.myForm.get('color') as FormControl;
  }

  get chipValue() {
    return this.myForm.get('chipValue') as FormControl;
  }

  get chipsAvailable() {
    return this.myForm.get('chipsAvailable') as FormControl;
  }


  validateChipValueExist( value: number, chips: PokerChip[] ): boolean {
    return true;
  }

  validateChipColorExist( color: string, chips: PokerChip[] ): boolean {
    return true;
  }

  onAddChip(): void {
    console.log('color:', this.pokerChipColor.value );
    console.log('value:', this.chipValue.value );
    console.log('value:', this.chipsAvailable.value );


    if ( isNaN(this.chipValue.value) || isNaN(this.chipsAvailable.value) ) {
      return;
    }

    if( !this.validateChipValueExist ) return;

    if( !this.validateChipColorExist ) return;

    this.chips.push({
      color: this.pokerChipColor.value,
      value: this.chipValue.value ,
      quantityAvailable: this.chipsAvailable.value
    });
  }

}
