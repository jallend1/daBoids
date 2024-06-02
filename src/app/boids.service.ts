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
      availableUnits: 1,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: "Steller's Jay",
      city: 'Issaquah',
      state: 'WA',
      photo: `${this.baseUrl}/stellers-jay.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: 'Black-capped Chickadee',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/black-capped-chickadee.jpg`,
      availableUnits: 3,
      wifi: true,
      laundry: true,
    },
    {
      id: 3,
      name: 'Cedar Waxwing',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/cedar-waxwing.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 4,
      name: 'Dark-eyed Junco',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/dark-eyed-junco.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 5,
      name: 'Downy Woodpecker',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/downy-woodpecker.jpg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'House Finch',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/house-finch.jpg`,
      availableUnits: 7,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'House Sparrow',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/house-sparrow.jpg`,
      availableUnits: 8,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Northern Flicker',
      city: 'Duvall',
      state: 'WA',
      photo: `${this.baseUrl}/northern-flicker.jpg`,
      availableUnits: 9,
      wifi: true,
      laundry: true,
    },
  ];

  getAllBoidLocations(): BoidLocation[] {
    return this.boidLocationList;
  }

  getBoidLocationById(id: number): BoidLocation | undefined {
    return this.boidLocationList.find((boidLocation) => boidLocation.id === id);
  }
}
