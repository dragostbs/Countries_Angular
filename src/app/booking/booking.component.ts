import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: ['1', [Validators.required]],
      guestMail: ['', [Validators.required, Validators.email]],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
      checkinDate: ['2022-01-01', [Validators.required]],
      checkoutDate: ['2022-01-01', [Validators.required]],
      bookingStatus: [''],
      bookingAmount: ['0', [Validators.required]],
      bookingDate: ['2022-01-01', [Validators.required]],
      mobileNumber: ['00-', [Validators.required]],
      address: this.fb.group({
        addressLine: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: [''],
          age: [''],
        }),
      ]),
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset({
      roomId: '1',
      guestMail: '',
      guestName: '',
      checkinDate: '2022-01-01',
      checkoutDate: '2022-01-01',
      bookingStatus: '',
      bookingAmount: '0',
      bookingDate: '2022-01-01',
      mobileNumber: '00-',
      address: {
        addressLine: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
    });
  }

  addGuest() {
    this.guests.push(this.fb.group({ guestName: [''], age: [''] }));
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
