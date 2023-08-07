import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PasswordMatch } from '../password-match';
import { HttpClient } from '@angular/common/http';
import { CSCService } from '../csc.service';

@Component({
  selector: 'app-login-register-user',
  templateUrl: './login-register-user.component.html',
  styleUrls: ['./login-register-user.component.css'],
})
export class LoginRegisterUserComponent {
  constructor(private _http:HttpClient,  private dropdownService: CSCService, ) {}
  public registerform!: FormGroup;

  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];

  ngOnInit(){
    this.registerform = new FormGroup(
      {
        userid: new FormControl(),
        uname: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        password: new FormControl('', [Validators.required]),
        cpassword: new FormControl('', [Validators.required]),
        fname: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        lname: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
        age: new FormControl('', [
          Validators.required,
          Validators.min(18),
          Validators.max(60),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),

        mobile: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        country: new FormControl([null]),
        state: new FormControl([null]),
        city: new FormControl([null]),
        pincode: new FormControl('', [
          Validators.required
        ]),

        address: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ]),
      },
      [PasswordMatch('password', 'cpassword')]
    );

    this.getCountries();

  }



  registerFn() {
    console.log(this.registerform.value);
    console.log(this.registerform.valid);
  }

  getControl(val: any): AbstractControl | null {
    return this.registerform.get(val);
  }

  getCountries() {

    this.dropdownService.getCountries().subscribe(x=> {
      this.countries = x;
    });
  }

  selectedCountry(country: any) {
    if (!country) {
      this.registerform.controls['state'].setValue('');
      this.registerform.controls['city'].setValue('');
      this.states = [];
      this.cities = [];
      return;
    }
    const countryId = parseInt(country.target.value);
    this.dropdownService.getStates(countryId).subscribe( res => {
      this.states = res;
    });
  }
  selectedState(state: any) {
    if (!state) {
      this.registerform.controls['city'].setValue('');
      this.cities = [];
      return;
    }
    const stateId = parseInt(state.target.value);
    this.dropdownService.getCities(stateId).subscribe(res =>{
      this.cities = res;
      console.log(this.cities);
    }

    );
  }

}
