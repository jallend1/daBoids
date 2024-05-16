import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoidLocationComponent } from '../boid-location/boid-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BoidLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
