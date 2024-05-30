import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'ModInput',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true }) placeholder = "";
  @Input() image = "";
}
