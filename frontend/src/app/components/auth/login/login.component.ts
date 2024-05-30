import { Component } from '@angular/core';
import { UiModule } from '../../ui/ui.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UiModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
