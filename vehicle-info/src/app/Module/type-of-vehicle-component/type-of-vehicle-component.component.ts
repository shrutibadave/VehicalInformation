import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleType } from 'src/app/model/vehicle.model';
import { VehicleDataServiceService } from 'src/app/service/vehicle-data-service.service';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-type-of-vehicle-component',
  templateUrl: './type-of-vehicle-component.component.html',
  styleUrls: ['./type-of-vehicle-component.component.scss']
})
export class TypeOfvehicleComponentComponent implements OnInit {

  valueFromQueryParam: any;
  vehicleForm: FormGroup;
  typeOfWheels: Array<string>;
  vehicleObject: VehicleType[];
  selectedId: string;
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
    if (typeOfVehicle != undefined) {
      this.vehicleForm.setValue({
        wheels:  typeOfVehicle.wheels

      })
    }
    else {
      if (this.vehicalData.getSessionstorage("typeOfVehicle") != undefined) {
        this.vehicleForm.setValue({
          wheels: this.vehicalData.getSessionstorage("typeOfVehicle")
        })
      }
    }
    this.getNumberOfVehicle()

  }
  getNumberOfVehicle() {
    this.vehicleObject = this.vehicalData.getVehicleTypes();

    this.typeOfWheels = this.vehicleObject.map(item => item.type);

  }
  previous() {
    this.router.navigate(['no-of-wheels']);
  }
  handleChange(ev: any, data: VehicleType) {
    this.selectedId = data.id;
    console.log(data)
    this.vehicalData.setSessionstorage("typeOfVehicle", data.type);

  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;
      this.router.navigate(['specific-model'], { state: { value: values, selectedId: this.selectedId } });
      this.vehicalData.removeSessionstorage("SpecialModel");


    }
    else {
      this.vehicleForm.markAllAsTouched();
      this.toastr.warning('Form is invalid. Please check the field.', 'Error');
    }

  }

}
