import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-donor-home',
  templateUrl: './donor-home.component.html',
  styleUrls: ['./donor-home.component.sass']
})
export class DonorHomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  public donorForm = new FormGroup({
    donationSchemeId: new FormControl(),
    donorName: new FormControl(),
    donorEmail: new FormControl(),
    panCard: new FormControl(),
    cardNo: new FormControl(),
  });
  public listOfSchemes: Array<any>;
  public donationAmount: number;
  public taxBenefit: number;
  public description: string = '';
  public loader: boolean = false;

  ngOnInit() {
    this.createForm();
    this.getSchemeNames();
  }

  // Function to get all the schemes
  getSchemeNames() {
      this.http.getRequest('/donations/schemes').subscribe((data) => {
        this.listOfSchemes = data.listOfSchemes;
      });
  }

    // gets donor form controls
    get donorControl() { return this.donorForm.controls; }

    // create a reactive login form
    createForm() {
      this.donorForm = this.formBuilder.group({
        donationSchemeId: ['', [
          Validators.required]],
        donorName: ['', [
          Validators.required,
          Validators.minLength(2)]],
        donorEmail: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        panCard: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
        cardNo: ['', [
          Validators.required,
          Validators.minLength(2)]]
      });
    }

    // Function which is responsible for doing the payment
    doPayment() {
      this.loader = true;
      const payload = this.donorForm.value;
      payload.cardType = 'Debit card';
      payload.taxBenefitAmount = this.taxBenefit.toString();
      this.http.postRequest('/donations/paymentDetails', payload).subscribe((data) => {
        swal.fire('Donation done succesfully, Transaction details has been sent to your email');
        this.loader = false;
      }, (exception) => {
        swal.fire('Fail');
        this.loader = false;
      });
    }

    // filters the array and get the selected value
    updateDonationAmount() {
      const filteredObject = this.listOfSchemes.find((data) => {
        return Number(this.donorForm.value.donationSchemeId) === Number(data.donationSchemeId);
      });
      this.donationAmount = filteredObject.donationAmount;
      this.taxBenefit = filteredObject.donationAmount * filteredObject.taxBenefitPer;
      this.description = filteredObject.description;
    }

}
