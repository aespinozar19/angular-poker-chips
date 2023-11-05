import { Pipe, PipeTransform } from '@angular/core';
import { PokerChip } from '../interfaces/poker-chip.interfaces';

@Pipe({
  name: 'chipImage'
})

export class ChipImagePipe implements PipeTransform {

  transform(chip: PokerChip): string {

    // if ( !chip.color ) {
    //   return 'assets/no-image.png'
    // }
    // else {
    //   return chip.imgBase64;
    // }

    console.log( chip.color );

    return `assets/${ chip.color }.png`;

  }

}
