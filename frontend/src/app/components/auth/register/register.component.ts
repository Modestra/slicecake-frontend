import { Component } from '@angular/core';
import { UiModule } from '../../ui/ui.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [UiModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
