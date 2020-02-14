import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    mobile: new FormControl(),
    password: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder, private http: HttpService, private route: Router) { }

  ngOnInit() {
    this.createForm();
  }

  // gets login form controls
  get loginControl() { return this.loginForm.controls; }

  // create a reactive login form
  createForm() {
    this.loginForm = this.formBuilder.group({
      mobile: ['', [
        Validators.required,
        Validators.minLength(10)]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)]]
    });
  }

  // checks whether the user is authorized
  public login(): void {
    console.log('loginFrom', this.loginForm.value);
    this.http.postRequest('users/login', this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('adminid', data.userId);
      this.route.navigate(['/adminhome']);
    });
  }

  public donorLogin(): void {
    this.route.navigate(['/donorhome']);
  }

}
