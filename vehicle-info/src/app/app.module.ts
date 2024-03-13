import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponentComponent } from './Module/info-component/info-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WheelsComponentComponent } from './Module/wheels-component/wheels-component.component';
import { TypeOfvehicleComponentComponent } from './Module/type-of-vehicle-component/type-of-vehicle-component.component';
import { SpecificModelComponentComponent } from './Module/specific-model-component/specific-model-component.component';
import { DateRangePickereComponentComponent } from './Module/date-range-pickere-component/date-range-pickere-component.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponentComponent,
    WheelsComponentComponent,
    TypeOfvehicleComponentComponent,
    SpecificModelComponentComponent,
    DateRangePickereComponentComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatDatepickerModule,
    MatNativeDateModule,DateRangePickereComponentComponent]
})
export class AppModule { }
