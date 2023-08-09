import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  public registerform!: FormGroup;

  constructor(private router:Router, private userloginservice:UserloginService,private toastr: ToastrService ){

  }
  ngOnInit(){
  this.registerform = new FormGroup({
  uname: new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]),
  password: new FormControl('', [Validators.required])
    })
  }


  getControl(val: any): AbstractControl | null {
    return this.registerform.get(val);
  }

  registerFn() {
    console.log(this.registerform.value);

    this.userloginservice.loginUser(this.registerform.value).subscribe(res=>{
      if(res){
        this.router.navigateByUrl('dashboard')
        this.toastr.success('Welcome to the App', 'Success');
      }
      else{
        this.toastr.error('User Registered', 'failed');
      }
    })
  }                                                                                                                                                                        
}
