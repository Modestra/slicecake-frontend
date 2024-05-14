import { Component } from '@angular/core';
import { LayoutsModule } from '../../components/layouts/layouts.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LayoutsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
