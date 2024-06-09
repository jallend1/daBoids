import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EbirdService {
  constructor() {}

  async getEbirdData(species: string) {
    const url = `https://api.ebird.org/v2/ref/taxonomy/ebird?species=${species}&fmt=json&key=${environment.ebirdApiKey}`;
    const data = await fetch(url);
    return data.json();
  }
}
