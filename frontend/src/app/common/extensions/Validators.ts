import {AbstractControl, ValidatorFn} from "@angular/forms";

export function InValidator<T>(items: T[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (items.indexOf(control.value) < 0) {
        return {'invalidType': true};
      }
      return null;
    }
}
