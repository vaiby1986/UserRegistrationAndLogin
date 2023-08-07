import { AbstractControl } from "@angular/forms";

export function PasswordMatch(password:string, cpassword:string)
{
return function(form:AbstractControl){

  const PasswordValue = form.get(password)?.value
  const CPasswordValue = form.get(cpassword)?.value

  if(PasswordValue===CPasswordValue){
    return null
  }
  else{
    return {passwordMisMatch: true}
  }
}

}
