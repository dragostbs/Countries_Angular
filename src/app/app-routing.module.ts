import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookingComponent } from './booking/booking.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
