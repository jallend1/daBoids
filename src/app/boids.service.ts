import { Injectable } from '@angular/core';
import { BoidLocation } from './boidlocation';

@Injectable({
  providedIn: 'root',
})
export class BoidsService {
  constructor() {}
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
      photo: `assets/boidImages/stellers-jay.jpeg`,
      sightings: 2,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 2,
      name: 'Black-capped Chickadee',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/black-capped-chickadee.jpg`,
      sightings: 3,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 3,
      name: 'American Crow',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/american-crow.jpeg`,
      sightings: 4,
      atBirdFeeder: false,
      personalPhoto: true,
    },
    {
      id: 4,
      name: 'Dark-eyed Junco',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/dark-eyed-junco.jpg`,
      sightings: 5,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 5,
      name: 'Chestnut-backed Chickadee',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/chestnut-backed-chickadee.jpeg`,
      sightings: 6,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 6,
      name: 'House Finch',
      city: 'Seattle',
      state: 'WA',
      photo: `assets/boidImages/house-finch.jpg`,
      sightings: 7,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 7,
      name: 'Song Sparrow',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/song-sparrow.jpeg`,
      sightings: 8,
      atBirdFeeder: true,
      personalPhoto: true,
    },
    {
      id: 8,
      name: 'Northern Flicker',
      city: 'Duvall',
      state: 'WA',
      photo: `assets/boidImages/northern-flicker.jpg`,
      sightings: 9,
      atBirdFeeder: true,
      personalPhoto: false,
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
