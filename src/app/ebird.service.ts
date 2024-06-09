import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EbirdService {
  constructor() {}

  async getEbirdData(species: string) {
    console.log(species);
    const url = `https://api.ebird.org/v2/ref/taxonomy/ebird?species=${species}&fmt=json&key=${environment.ebirdApiKey}`;
    const data = await fetch(url);
    return data.json();

    // await console.log(data);
    // Log the JSON data to the console
    // await console.log(data.json());
    // return data.json();
    // return (await data.json()) ?? [];
    // await console.log(data.json());
    // return await data;

    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   });
  }
}
