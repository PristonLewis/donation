import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.sass']
})
export class DonorHomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpService, private route: Router) { }

  public donorForm = new FormGroup({
    schemename: new FormControl(),
    amount: new FormControl(),
    description: new FormControl(),
    donorname: new FormControl(),
    donoremail: new FormControl(),
    donorpan: new FormControl(),
    donorcrdr: new FormControl(),
  });
  ngOnInit() {
    this.createForm();
    this.getSchemeNames();
  }

    getSchemeNames() {
      this.http.getRequest('/donations/schemes').subscribe((data) => {
        console.log('data', data);
      });
    }

    // gets donor form controls
    get donorControl() { return this.donorForm.controls; }

    // create a reactive login form
    createForm() {
      this.donorForm = this.formBuilder.group({
        schemename: ['', [
          Validators.required]],
        amount: ['', [
          Validators.required,
          Validators.minLength(2)]],
        description: ['', [
          Validators.required,
          Validators.minLength(2)]],
        donorname: ['', [
          Validators.required,
          Validators.minLength(2)]],
        donoremail: ['', [
          Validators.required,
          Validators.minLength(2)]],
        donorpan: ['', [
          Validators.required,
          Validators.minLength(2)]],
        donorcrdr: ['', [
          Validators.required,
          Validators.minLength(2)]]
      });
    }

    doPayment() {
      console.log(this.donorForm.value);
    }

}
