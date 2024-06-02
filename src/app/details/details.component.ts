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

  constructor(private route: ActivatedRoute) {
    this.boidLocationId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
