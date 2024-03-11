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
import { TypeOfWheelComponentComponent } from './Module/type-of-wheel-component/type-of-wheel-component.component';
import { SpecificModelComponentComponent } from './Module/specific-model-component/specific-model-component.component';
import { DateRangePickereComponentComponent } from './Module/date-range-pickere-component/date-range-pickere-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponentComponent,
    WheelsComponentComponent,
    TypeOfWheelComponentComponent,
    SpecificModelComponentComponent,
    DateRangePickereComponentComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
