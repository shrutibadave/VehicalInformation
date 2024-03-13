import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleDataServiceService } from 'src/app/service/vehicle-data-service.service';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-specific-model-component',
  templateUrl: './specific-model-component.component.html',
  styleUrls: ['./specific-model-component.component.scss']
})
export class SpecificModelComponentComponent implements OnInit {

  valueFromQueryParam: any;
  vehicleForm: FormGroup;
  typeOfWheels: Array<string>;
  selectedId: string;
  vehicleById: Vehicle;
  get f() {
    return this.vehicleForm.controls;
  }
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private vehicleService: VehicleServiceService,
    private vehicalData: VehicleDataServiceService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.vehicleForm = this.fb.group(
      {
        wheels: ['', Validators.required]
      }
    )
    this.valueFromQueryParam = history.state.value
    let typeOfVehicle = history.state.TypeOfVehicle
    console.log(this.valueFromQueryParam)
    this.selectedId = history.state.selectedId;
    if (this.selectedId != undefined) {
      this.vehicalData.setSessionstorage("selectedId", this.selectedId);
    }
    if (typeOfVehicle != undefined) {
      this.vehicleForm.setValue({
        wheels: typeOfVehicle.name

      })
    }
    else {
      if (this.vehicalData.getSessionstorage("SpecialModel") != undefined) {
        this.vehicleForm.setValue({
          wheels: this.vehicalData.getSessionstorage("typeOfVehicle")
        })
      }
    }
    this.getNumberOfVehicle()

  }
  getNumberOfVehicle() {
    if (this.selectedId == undefined) {
      this.selectedId = this.vehicalData.getSessionstorage("selectedId")
    }
    this.vehicleById = this.vehicalData.getVehicleDataBasedOnId(this.selectedId);


  }
  handleChange(ev: any, data: any) {

    console.log(data)
    this.vehicalData.setSessionstorage("SpecialModel", data);
  }
  previous() {
    this.router.navigate(['type-of-vehicle']);
  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;
      this.router.navigate(['date-range-picker'], { state: { value: values, vehicleById: this.vehicleById } });

    }
    else {
      if (this.vehicleById == undefined &&  this.vehicalData.getSessionstorage("SpecialModel")==undefined) {
        this.vehicleForm.setErrors({ 'invalid': true });
        this.router.navigate(['date-range-picker'], { state: { value: null } });
      }
      else {
        this.vehicleForm.markAllAsTouched();
        this.toastr.warning('Form is invalid. Please check the field.', 'Error');
      }
    }

  }

}
