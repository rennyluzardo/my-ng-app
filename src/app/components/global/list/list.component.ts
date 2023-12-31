import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() data: Array<{
    id: Number,
    title: string,
  }> = [];
}
