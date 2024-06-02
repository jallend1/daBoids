import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoidsService } from '../boids.service';
import { BoidLocation } from '../boidlocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  boidLocationId: number;
  boidLocation: BoidLocation | undefined;
  boidService = new BoidsService();

  constructor(
    private route: ActivatedRoute,
    private boidsService: BoidsService
  ) {
    this.boidLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.boidLocation = this.boidsService.boidLocationList.find(
      (boidLocation) => boidLocation.id === this.boidLocationId
    );
  }
}
