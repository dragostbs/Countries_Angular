import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

export interface Country {
  id: number;
  name: string;
  flags: string;
  capital: string;
  population: number;
  area: number;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  country: Country[] = [];
  page = 1;

  constructor(private countriesService: CountryService) {}

  ngOnInit() {
    this.countriesService.getCountries$.subscribe((res) => {
      this.country = res;
    });
  }
}
