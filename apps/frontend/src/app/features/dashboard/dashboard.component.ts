import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

export interface Tile {
  image: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  panelOpenState = false;
  tiles: Tile[] = [
    {text: 'Сніданки', cols: 3, rows: 1, image: '/assets/images/breakfest.jpg'},
    {text: 'Десерти', cols: 1, rows: 2, image: '/assets/images/dessert.jpg'},
    {text: 'М\'ясо', cols: 1, rows: 1, image: '/assets/images/meat.jpg'},
    {text: 'Риба', cols: 2, rows: 1, image: '/assets/images/fish.jpg'},
    {text: 'Овочі', cols: 4, rows: 1, image: '/assets/images/vegetables.jpg'},
  ];

}
