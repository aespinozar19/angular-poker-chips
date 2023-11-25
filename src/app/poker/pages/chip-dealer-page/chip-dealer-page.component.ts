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
    quantityPlayers: [4, [Validators.required, Validators.min(2)]],
    amount: [114, [Validators.required, Validators.min(10)]],
    money: ['soles', [Validators.required]],
    moneySimbol: ['S/ ', [Validators.required]],
    chipsAvailable: ['# fichas disp.'],
    chipValue: ['valor'],
    color: ['#563d7c']
    // chips: this.fb.array(this.chips),
  });

  constructor(
    private fb: FormBuilder,
    private chipsServices: ChipsServices,
  ) { }

  onDeleteChip(chip: PokerChip): void {
    console.log('Eliminar item');
    const index = this.chips.indexOf(chip);
    if (index !== -1) {
      this.chips.splice(index, 1);
    }
  }

  onSubmit(): void {
    var totalAmount: number = this.numberOfPlayers.value * this.amountPerPlayer.value;
    var montoResidual: number;
    console.log('Monto total a repartir en fichas : ', totalAmount);
    //Ordenar fichas
    const newChips = this.chips
      .sort((a: PokerChip, b: PokerChip) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        return 0;
      });

    //Recorrer fichas por valor
    newChips.flatMap(chip => {
      const MaxFichasDisponibles: number = Math.floor(chip.quantityAvailable / this.numberOfPlayers.value);
      console.log(`Fichas de valor '${chip.value}' disponibles por jugador `, MaxFichasDisponibles);
      const totalXValor: number = (MaxFichasDisponibles * this.numberOfPlayers.value * chip.value);
      console.log(totalXValor)
      if (totalAmount > totalXValor) {
        chip.quantityPerPerson = MaxFichasDisponibles;
        totalAmount = totalAmount - totalXValor;
        this.montoResidual = totalAmount;
        console.log(`Monto residual por repartir: ${totalAmount} `);
      } else {
        chip.quantityPerPerson = 0;
        const valorFicha = chip.value;
        const montoResidualPorJugador = (this.montoResidual / this.numberOfPlayers.value);
        if (montoResidualPorJugador >= valorFicha) {
          console.log("Repartir fichas de valor: ", valorFicha);

          const cantidadMaximaDeFichasPosibles = Math.floor(montoResidualPorJugador / valorFicha);
          console.log('cantidadMaximaDeFichasPosibles', cantidadMaximaDeFichasPosibles);

          chip.quantityPerPerson = cantidadMaximaDeFichasPosibles;
          totalAmount = totalAmount - (cantidadMaximaDeFichasPosibles * valorFicha * this.numberOfPlayers.value);
          this.montoResidual = totalAmount;

        }
      }
    });

    this.montoResidual = totalAmount / this.numberOfPlayers.value;

    // console.log(`Monto residual por repartir:`, (totalAmount / this.numberOfPlayers.value));

    console.log(newChips);
    console.log('finish')


  }

  getChipsTestInit(): void {
    this.chips.push({
      color: '#FF5733',
      value: 5,
      quantityAvailable: 15
    });
    this.chips.push({
      color: '#C2604B',
      value: 2,
      quantityAvailable: 10
    });
    this.chips.push({
      color: '#B5C24B',
      value: 1,
      quantityAvailable: 20
    });
    this.chips.push({
      color: '#FF5733',
      value: 10,
      quantityAvailable: 20
    });
    this.chips.push({
      color: '#FF5733',
      value: 20,
      quantityAvailable: 2
    });
    this.chips.push({
      color: '#FF5733',
      value: 25,
      quantityAvailable: 8
    });
  }

  ngOnInit(): void {
    this.getChipsTestInit();
  }

  changeTypeMoney(e: any) {
    console.log(e);
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


  validateChipValueExist(value: number, chips: PokerChip[]): boolean {
    return true;
  }

  validateChipColorExist(color: string, chips: PokerChip[]): boolean {
    return true;
  }

  onAddChip(): void {

    if (isNaN(this.chipValue.value) || isNaN(this.chipsAvailable.value)) {
      return;
    }

    if (!this.validateChipValueExist) return;

    if (!this.validateChipColorExist) return;

    this.chips.push({
      color: this.pokerChipColor.value,
      value: this.chipValue.value,
      quantityAvailable: this.chipsAvailable.value
    });
  }

}
