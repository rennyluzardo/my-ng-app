import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MenuComponent, MatGridListModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
