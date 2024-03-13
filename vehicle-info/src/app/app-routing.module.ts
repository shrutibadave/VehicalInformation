import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { InfoComponentComponent } from './Module/info-component/info-component.component';
import { DateRangePickereComponentComponent } from './Module/date-range-pickere-component/date-range-pickere-component.component';
import { SpecificModelComponentComponent } from './Module/specific-model-component/specific-model-component.component';
import { TypeOfvehicleComponentComponent } from './Module/type-of-vehicle-component/type-of-vehicle-component.component';
import { WheelsComponentComponent } from './Module/wheels-component/wheels-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  // { path: '**', redirectTo: '/user' },
  {
    path: 'user',
    component: InfoComponentComponent,
  },
  {
    path: 'no-of-wheels',
    component: WheelsComponentComponent,
  },
  {
    path: 'type-of-vehicle',
    component: TypeOfvehicleComponentComponent,
  },
  {
    path: 'specific-model',
    component: SpecificModelComponentComponent,
  },
  {
    path: 'date-range-picker',
    component: DateRangePickereComponentComponent
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
