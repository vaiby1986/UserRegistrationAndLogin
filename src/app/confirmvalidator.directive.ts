import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmvalidator]',
  providers:[{provide: NG_VALIDATORS,
  useExisting: ConfirmvalidatorDirective,
  multi:true
}]
})
export class ConfirmvalidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
