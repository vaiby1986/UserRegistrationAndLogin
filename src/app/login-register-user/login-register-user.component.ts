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
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-register-user',
  templateUrl: './login-register-user.component.html',
  styleUrls: ['./login-register-user.component.css'],
})
export class LoginRegisterUserComponent {
  constructor(private _http:HttpClient,  private dropdownService: CSCService, private userloginregister:UserloginService, private router:Router,private toastr: ToastrService ) {}


  success(): void {
    this.toastr.success('This is a success message', 'Tada');
  }
  public registerform!: FormGroup;

  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];

  ngOnInit(){
    this.registerform = new FormGroup(
      {
        userid: new FormControl(1),
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
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
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



  registerFn(){

    const countryid: number = parseInt(this.registerform.get('country').value) ;
     const selectedOption = this.countries.find(option => option.countryId === countryid);
    if (selectedOption) {
      this.registerform.get('country').setValue(selectedOption.countryName);
    }
  const stateid: number = parseInt( this.registerform.get('state').value);
  const selectedOption2 = this.states.find(option => option.stateId === stateid);
    if (selectedOption2) {
      this.registerform.get('state').setValue(selectedOption2.stateName);
    }

    const cityid: number = parseInt( this.registerform.get('city').value);
  const selectedOption3 = this.cities.find(option => option.cityId === cityid);
    if (selectedOption2) {
      this.registerform.get('city').setValue(selectedOption3.cityName);
    }


    this.userloginregister.registerUser(this.registerform.value).subscribe(x=>{
      let data = x;
      console.log(data);
      if(data=="success"){
      this.toastr.success('User Registered', 'Success');
      setInterval(() => {
        this.router.navigateByUrl('login')
      }, 5000);

      }
    })


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
      console.log(this.states);
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
    });

  }

}
