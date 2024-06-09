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
  filteredBoidList: BoidLocation[] = [];
  ebirdData: any;

  constructor(
    private boidsService: BoidsService // private ebirdService: EbirdService
  ) {
    this.boidLocationList = this.boidsService.getAllBoidLocations();
    this.filteredBoidList = this.boidLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredBoidList = this.boidLocationList;
    }

    this.filteredBoidList = this.boidLocationList.filter((boidLocation) =>
      boidLocation?.name?.toLowerCase().includes(text.toLowerCase())
    );
  }
}
