import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  public registerform!: FormGroup;

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
    console.log(this.registerform.valid);
  }
}
