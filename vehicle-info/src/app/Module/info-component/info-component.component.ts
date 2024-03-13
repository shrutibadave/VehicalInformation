import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleDataServiceService } from 'src/app/service/vehicle-data-service.service';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})
export class InfoComponentComponent implements OnInit {
  vehicleForm: FormGroup;
  get f() {
    return this.vehicleForm.controls;
  }
  constructor(private toastr: ToastrService, private fb: FormBuilder, private common: VehicleDataServiceService,
    private route: Router, private Activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.vehicleForm = this.fb.group(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)

      }
    )
    let userInfo = history.state.value;
    if (userInfo != undefined) {
      this.common.setSessionstorage("userInfo", userInfo);
    }
    else {
      userInfo = this.common.getSessionstorage("userInfo");
    }
    if (userInfo != undefined) {
      this.vehicleForm.setValue({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName
      });
    }
  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;
      console.log(values)

      this.route.navigate(['no-of-wheels'], { state: { value: values } });
      this.common.removeSessionstorage("noOfWheel");

    }
    else {
      this.toastr.warning('Form is invalid. Please check the fields.', 'Error');
    }

  }

}
