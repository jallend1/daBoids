import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoidLocationComponent } from '../boid-location/boid-location.component';
import { BoidLocation } from '../boidlocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BoidLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  boidLocation: BoidLocation = {
    id: 9999,
    name: 'Test Boid',
    city: 'Test boid location',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
