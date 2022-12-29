import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Country } from '../countries/countries.component';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  country: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountries$ = this.http
    .get<Country[]>('https://restcountries.com/v3.1/region/europe')
    .pipe(shareReplay(1));
}
