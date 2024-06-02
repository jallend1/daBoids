import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoidLocationComponent } from '../boid-location/boid-location.component';
import { BoidLocation } from '../boidlocation';
import { BoidsService } from '../boids.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BoidLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  boidLocationList: BoidLocation[] = [];

  constructor(private boidsService: BoidsService) {
    this.boidLocationList = this.boidsService.getAllBoidLocations();
  }
}
