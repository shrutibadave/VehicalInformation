import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { InfoComponentComponent } from './Module/info-component/info-component.component';
import { DateRangePickereComponentComponent } from './Module/date-range-pickere-component/date-range-pickere-component.component';
import { SpecificModelComponentComponent } from './Module/specific-model-component/specific-model-component.component';
import { TypeOfWheelComponentComponent } from './Module/type-of-wheel-component/type-of-wheel-component.component';
import { WheelsComponentComponent } from './Module/wheels-component/wheels-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/no-of-wheels',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: InfoComponentComponent,
  },
  {
    path: 'no-of-wheels',
    component: WheelsComponentComponent,
  },
  {
    path: 'type-of-wheel',
    component: TypeOfWheelComponentComponent,
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
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
      }
    });
  }
}
