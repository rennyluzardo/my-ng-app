import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/global/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
