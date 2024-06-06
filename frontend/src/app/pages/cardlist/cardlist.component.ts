import { Component } from '@angular/core';

@Component({
  selector: 'cardlist',
  standalone: true,
  imports: [],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.scss'
})
export class CardlistComponent {

  recupes: string = "Выбранные рецепты"
  constructor() {

  }
}
