import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Booking, Vehicle } from 'src/app/model/vehicle.model';
import { VehicleDataServiceService } from 'src/app/service/vehicle-data-service.service';
import { VehicleServiceService } from 'src/app/service/vehicle-service.service';

@Component({
  selector: 'app-date-range-pickere-component',
  templateUrl: './date-range-pickere-component.component.html',
  styleUrls: ['./date-range-pickere-component.component.scss'],

})
export class DateRangePickereComponentComponent implements OnInit {
  vehicleByModel: Vehicle;
  vehicleById: any;
  bookingDetail: Booking;
  bookedDates: Date[];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private vehicleService: VehicleServiceService,
    private vehicalData: VehicleDataServiceService,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.vehicleByModel = history.state.value;
    this.vehicleById = history.state.vehicleById
    if (this.vehicleById != undefined) {
      this.vehicalData.setSessionstorage("vehicleById", this.vehicleById);
    }
    else {
      this.vehicleById = this.vehicalData.getSessionstorage("vehicleById");
    }
    this.bookingDetail = this.vehicalData.getVehicleBookingBasedOnId(this.vehicleById.id)
    console.log(this.vehicleById)
  }
  previous() {
    // this.router.navigate(['specific-model'], { state: { NoOfWheel: this.valueFromQueryParam } });
    this.router.navigate(['specific-model'], { state: { TypeOfVehicle: this.vehicleById } });
  }
  submitForm() {
    if (this.range.valid) {
      this.toastr.success("Data added sucessfully")
    }
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    // Parse the stored date strings
    const startDate = new Date(this.bookingDetail.startDate);
    const endDate = new Date(this.bookingDetail.endDate);

    // Check if the selected date is within the range of startDate and endDate
    return date < startDate || date > endDate;
  };



}
