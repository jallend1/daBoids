import { Injectable } from '@angular/core';
import { BoidLocation } from './boidlocation';

@Injectable({
  providedIn: 'root',
})
export class BoidsService {
  constructor() {}
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  boidLocationList: BoidLocation[] = [
    {
      id: 0,
      name: 'American Robin',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/american-robin.jpg`,
      sightings: 1,
      atBirdFeeder: false,
      personalPhoto: false,
    },
    {
      id: 1,
      name: "Steller's Jay",
      city: 'Issaquah',
      state: 'WA',
      photo: `${this.baseUrl}/stellers-jay.jpg`,
      sightings: 2,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 2,
      name: 'Black-capped Chickadee',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/black-capped-chickadee.jpg`,
      sightings: 3,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 3,
      name: 'Cedar Waxwing',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/cedar-waxwing.jpg`,
      sightings: 4,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 4,
      name: 'Dark-eyed Junco',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/dark-eyed-junco.jpg`,
      sightings: 5,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 5,
      name: 'Downy Woodpecker',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/downy-woodpecker.jpg`,
      sightings: 6,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 6,
      name: 'House Finch',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/house-finch.jpg`,
      sightings: 7,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 7,
      name: 'House Sparrow',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/house-sparrow.jpg`,
      sightings: 8,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 8,
      name: 'Northern Flicker',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/northern-flicker.jpg`,
      sightings: 9,
      atBirdFeeder: true,
      personalPhoto: true,
    },
  ];

  getAllBoidLocations(): BoidLocation[] {
    return this.boidLocationList;
  }

  getBoidLocationById(id: number): BoidLocation | undefined {
    return this.boidLocationList.find((boidLocation) => boidLocation.id === id);
  }

  submitSighting(cityName: string, stateName: string) {
    console.log(
      `Bird sighting declared: cityName: ${cityName}, stateName: ${stateName}.`
    );
  }
}
