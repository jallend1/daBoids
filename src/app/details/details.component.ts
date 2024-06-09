import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BoidsService } from '../boids.service';
import { BoidLocation } from '../boidlocation';
import { EbirdService } from '../ebird.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  boidLocationId: number;
  boidLocation: BoidLocation | undefined;
  boidService = new BoidsService();
  ebirdData: any;

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
    this.ebirdData = this.boidLocation
      ? this.checkEbirdService(this.boidLocation.speciesCode)
      : null;
  }

  ngOnInit() {
    if (this.boidLocation) {
      this.checkEbirdService(this.boidLocation.speciesCode);
    }
  }

  async checkEbirdService(speciesCode: string) {
    this.ebirdData = await this.ebirdsService.getEbirdData(speciesCode);
  }

  submitSighting() {
    this.boidsService.submitSighting(
      this.applyForm.value.cityName ?? '',
      this.applyForm.value.stateName ?? ''
    );
  }
}
