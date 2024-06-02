import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoidLocation } from '../boidlocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boid-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './boid-location.component.html',
  styleUrl: './boid-location.component.css',
})
export class BoidLocationComponent {
  @Input() boidLocation!: BoidLocation;
}
