import { Component } from '@angular/core';
import { LayoutsModule } from '../../components/layouts/layouts.module';
import { CardlistComponent } from '../cardlist/cardlist.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LayoutsModule, CardlistComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
