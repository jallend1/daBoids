import { Injectable } from '@angular/core';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable({
  providedIn: 'root',
})
export class EbirdService {
  constructor() {}
  url =
    'https://api.ebird.org/v2/ref/taxonomy/ebird?species=hottea1&key=${process.env.EBIRD_API_KEY}';
}
