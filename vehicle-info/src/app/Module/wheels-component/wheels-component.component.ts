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
  valueFromQueryParam: string;
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
    this.route.queryParams.subscribe(params => {
      this.valueFromQueryParam = params['value'];
      // Now you can use this.valueFromQueryParam to update the UI
    });
    this.getNumberOfVehicle()

  }
  getNumberOfVehicle() {
    let data = this.vehicalData.getVehicleTypes();
    console.log(data);
    this.noOfWheels = data.map(item => item.wheels);

  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;
      console.log(values)

      this.router.navigate(['no-of-wheels'], { queryParams: { value: values } });

    }
    else {
      this.toastr.warning('Form is invalid. Please check the fields.', 'Error');
    }

  }
}
