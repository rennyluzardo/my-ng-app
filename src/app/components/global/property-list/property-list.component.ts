import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})

export class PropertyListComponent {
  @Input() properties: Array<{
    id: Number,
    title: string,
  }> = [];
}
