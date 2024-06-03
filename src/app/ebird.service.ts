import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EbirdService {
  constructor() {}

  getEbirdData(species: string) {
    const url = `https://api.ebird.org/v2/ref/taxonomy/ebird?species=${species}&key=${environment.ebirdApiKey}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
}
