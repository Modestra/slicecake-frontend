import { Component, Input } from '@angular/core';

@Component({
  selector: 'ModButton',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) title = "";
}
