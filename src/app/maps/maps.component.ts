import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as world from 'src/app/data/world.json';
import * as echarts from 'echarts';
import { CountryService } from '../services/country.service';

export interface Country {
  name: string;
  area: number;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  mapOption: EChartsOption = {};
  country: Country[] = [];
  countryName: string[] = [];
  countryArea: number[] = [];

  constructor(private countriesService: CountryService) {}

  ngOnInit() {
    this.countriesService.getCountries$.subscribe((res) => {
      this.country = res;
    });

    this.country.forEach((el) => {
      this.countryArea.push(el.area);

      Object.entries(el.name).forEach(([key, value], index) => {
        this.countryName.push(value);
      });
    });

    this.mapFunc();
  }

  mapFunc() {
    echarts.registerMap('World', world.default, {});
    this.mapOption = {
      title: {
        text: 'Countries in Europe (km)',
        subtext: 'Data from API',
        left: 'right',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: 'right',
        min: 0,
        max: 1250000,
        inRange: {
          color: [
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
          ],
        },
        text: ['High', 'Low'],
        calculable: true,
      },
      toolbox: {
        show: true,
        // orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          type: 'map',
          roam: true,
          map: 'World',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: this.countryName[0], value: this.countryArea[0] },
            { name: this.countryName[6], value: this.countryArea[2] },
            { name: this.countryName[9], value: this.countryArea[3] },
            { name: this.countryName[12], value: this.countryArea[4] },
            { name: this.countryName[15], value: this.countryArea[5] },
            { name: this.countryName[18], value: this.countryArea[6] },
            { name: this.countryName[21], value: this.countryArea[7] },
            { name: this.countryName[24], value: this.countryArea[8] },
            { name: this.countryName[27], value: this.countryArea[9] },
            { name: this.countryName[30], value: this.countryArea[10] },
            { name: this.countryName[33], value: this.countryArea[11] },
            { name: this.countryName[36], value: this.countryArea[12] },
            { name: this.countryName[39], value: this.countryArea[13] },
            { name: this.countryName[42], value: this.countryArea[14] },
            { name: this.countryName[45], value: this.countryArea[15] },
            { name: this.countryName[48], value: this.countryArea[16] },
            { name: this.countryName[51], value: this.countryArea[17] },
            { name: this.countryName[54], value: this.countryArea[18] },
            { name: this.countryName[57], value: this.countryArea[19] },
            { name: this.countryName[60], value: this.countryArea[20] },
            { name: this.countryName[63], value: this.countryArea[21] },
            { name: this.countryName[66], value: this.countryArea[22] },
            { name: this.countryName[69], value: this.countryArea[23] },
            { name: this.countryName[72], value: this.countryArea[24] },
            { name: this.countryName[75], value: this.countryArea[25] },
            { name: this.countryName[78], value: this.countryArea[26] },
            { name: this.countryName[81], value: this.countryArea[27] },
            { name: this.countryName[84], value: this.countryArea[28] },
            { name: this.countryName[87], value: this.countryArea[29] },
            { name: this.countryName[90], value: this.countryArea[30] },
            { name: this.countryName[93], value: this.countryArea[31] },
            { name: this.countryName[96], value: this.countryArea[32] },
            { name: this.countryName[99], value: this.countryArea[33] },
            { name: this.countryName[102], value: this.countryArea[34] },
            { name: this.countryName[105], value: this.countryArea[35] },
            { name: this.countryName[108], value: this.countryArea[36] },
            { name: this.countryName[111], value: this.countryArea[37] },
            { name: this.countryName[114], value: this.countryArea[38] },
            { name: this.countryName[120], value: this.countryArea[40] },
            { name: this.countryName[123], value: this.countryArea[41] },
            { name: this.countryName[126], value: this.countryArea[42] },
            { name: this.countryName[129], value: this.countryArea[43] },
            { name: this.countryName[132], value: this.countryArea[44] },
            { name: this.countryName[135], value: this.countryArea[45] },
            { name: this.countryName[138], value: this.countryArea[46] },
            { name: this.countryName[141], value: this.countryArea[47] },
            { name: this.countryName[144], value: this.countryArea[48] },
            { name: this.countryName[147], value: this.countryArea[49] },
            { name: this.countryName[150], value: this.countryArea[50] },
            { name: this.countryName[153], value: this.countryArea[51] },
            { name: this.countryName[154], value: this.countryArea[51] },
          ],
        },
      ],
    };
  }
}
