import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoidLocation } from '../boidlocation';

@Component({
  selector: 'app-boid-location',
  standalone: true,
  imports: [],
  templateUrl: './boid-location.component.html',
  styleUrl: './boid-location.component.css',
})
export class BoidLocationComponent {
  @Input() boidLocation!: BoidLocation;
}
