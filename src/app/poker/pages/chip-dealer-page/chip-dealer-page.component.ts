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

  public montoResidual: number = 0;

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
    var totalAmount: number = this.numberOfPlayers.value * this.amountPerPlayer.value;
    var montoResidual: number;
    console.log('Monto total a repartir en fichas : ', totalAmount);
    //Ordenar fichas
    const newChips = this.chips
      .sort( (a: PokerChip, b: PokerChip) => {
        if ( a.value > b.value ){
          return 1;
        }
        if ( a.value < b.value ){
          return -1;
        }
        return 0;
      });

    //Recorrer fichas por valor
    newChips.flatMap( chip => {
      const MaxFichasDisponibles: number = Math.floor( chip.quantityAvailable / this.numberOfPlayers.value );
      console.log(`Fichas de valor '${ chip.value }' disponibles por jugador `, MaxFichasDisponibles);
      const totalXValor: number = ( MaxFichasDisponibles * this.numberOfPlayers.value * chip.value );
      console.log( totalXValor )
      if ( totalAmount > totalXValor ) {
        chip.quantityPerPerson = MaxFichasDisponibles;
        totalAmount = totalAmount - totalXValor;
        this.montoResidual = totalAmount;
        console.log(`Monto residual por repartir: ${ totalAmount } `);
      } else {
        for (let index = 0; index < MaxFichasDisponibles; index++) {
          // const element = array[index];

        }
        chip.quantityPerPerson = MaxFichasDisponibles;
        totalAmount = totalAmount - totalXValor;
        this.montoResidual = totalAmount;
        console.log(`Monto residual por repartir: ${ totalAmount } `);
      }
    });

    console.log(newChips);
    console.log('finish')

    // const qOfChips: number = totalAmount/

  }

  getChipsTestInit(): void {
    this.chips.push({
      color: '#FF5733',
      value: 0.8 ,
      quantityAvailable: 15
    });
    this.chips.push({
      color: '#C2604B',
      value: 0.9 ,
      quantityAvailable: 10
    });
    this.chips.push({
      color: '#B5C24B',
      value: 0.5 ,
      quantityAvailable: 20
    });
  }

  ngOnInit(): void {
    // this.chipsServices.getChips()
    //   .subscribe( chips => this.chips = chips );
    this.getChipsTestInit();
    // console.log( this.chips );
  }

  changeTypeMoney(e: any) {
    console.log( e );
  }

  get pokerChipColor() {
    return this.myForm.get('color') as FormControl;
  }

  get amountPerPlayer() {
    return this.myForm.get('amount') as FormControl;
  }

  get numberOfPlayers() {
    return this.myForm.get('quantityPlayers') as FormControl;
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
