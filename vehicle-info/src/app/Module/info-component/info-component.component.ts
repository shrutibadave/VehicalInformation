import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private toastr: ToastrService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.vehicleForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]

      }
    )
  }
  submitForm() {
    if (this.vehicleForm?.valid) {

      let values = this.vehicleForm.value;
      console.log(values)

      this.route.navigate(['no-of-wheels'], { queryParams: { value: values } });

    }
    else {
      this.toastr.warning('Form is invalid. Please check the fields.', 'Error');
    }

  }

}
