import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleDataServiceService } from 'src/app/service/vehicle-data-service.service';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-wheels-component',
  templateUrl: './wheels-component.component.html',
  styleUrls: ['./wheels-component.component.scss']
})
export class WheelsComponentComponent implements OnInit {
  valueFromQueryParam: any;
  vehicleForm: FormGroup;
  noOfWheels: Array<number>;
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
    let noOfWheel = history.state.NoOfWheel
    if (noOfWheel != undefined) {
      this.vehicalData.setSessionstorage("noOfWheel", noOfWheel.wheels);
      this.vehicleForm.setValue({
        wheels: noOfWheel?.wheels
      })
    }
    else {
      if (this.vehicalData.getSessionstorage("noOfWheel") != undefined) {
        this.vehicleForm.setValue({
          wheels: this.vehicalData.getSessionstorage("noOfWheel")
        })
      }
    }
    console.log(this.valueFromQueryParam)
    this.getNumberOfVehicle()

  }
  getNumberOfVehicle() {
    let data = this.vehicalData.getVehicleTypes();
    console.log(data);
    this.noOfWheels = data.map(item => item.wheels);

  }
  handleChange(ev: any, data: any) {
    this.vehicalData.setSessionstorage("noOfWheel", data);
    console.log(data)

  }
  previous() {
    this.router.navigate(['user'], { state: { value: this.valueFromQueryParam } });
  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;


      this.router.navigate(['type-of-vehicle'], { state: { value: values } });
      this.vehicalData.removeSessionstorage("typeOfVehicle");

    }
    else {
      this.vehicleForm.markAllAsTouched();
      this.toastr.warning('Form is invalid. Please check the field.', 'Error');
    }

  }
}
