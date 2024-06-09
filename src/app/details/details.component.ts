import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoidsService } from '../boids.service';
import { BoidLocation } from '../boidlocation';
import { EbirdService } from '../ebird.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  boidLocationId: number;
  boidLocation: BoidLocation | undefined;
  boidService = new BoidsService();
  // ebirdService = new EbirdService();

  applyForm = new FormGroup({
    cityName: new FormControl(''),
    stateName: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private boidsService: BoidsService,
    private ebirdsService: EbirdService
  ) {
    this.boidLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.boidLocation = this.boidsService.boidLocationList.find(
      (boidLocation) => boidLocation.id === this.boidLocationId
    );
  }

  async checkEbirdService(speciesCode: string) {
    const data = await this.ebirdsService.getEbirdData(speciesCode);
    console.log(data);
  }

  submitSighting() {
    this.boidsService.submitSighting(
      this.applyForm.value.cityName ?? '',
      this.applyForm.value.stateName ?? ''
    );
  }
}
