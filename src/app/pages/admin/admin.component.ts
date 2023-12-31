import { Component, Input } from '@angular/core';
import { PropertyListComponent } from '../../components/global/property-list/property-list.component';
import { MainLayoutComponent } from '../../components/global/main-layout/main-layout.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MainLayoutComponent,
    PropertyListComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  @Input() properties: Array<{
    id: Number,
    title: string,
  }> = [
    {
      id: 1,
      title: 'Property 1'
    },
    {
      id: 2,
      title: 'Property 2'
    },
    {
      id: 3,
      title: 'Property 3'
    }
  ]
}
