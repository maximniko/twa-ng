import {ValidationErrors} from "@angular/forms";
import {Component, Input} from "@angular/core";
import {Observable} from "rxjs";

@Component({template: ''})
export abstract class ReactiveForm {
  protected isInvalid(item: any): boolean | undefined {
    return item?.invalid && (item?.dirty || item?.touched)
  }

  protected errors(item: any): ValidationErrors | null | undefined {
    return item?.errors
  }

  validationErrors(errors: ValidationErrors | null | undefined, name: string): string|null {
    if (!errors) {
      return null
    }

    let result: string[] = []

    if (errors?.['required']) {
      result.push(`${name} is required.`)
    }
    if (errors?.['minlength']) {
      result.push(`Minimum length of ${name} is ${errors?.['minlength']['requiredLength']}.`)
    }
    if (errors?.['maxlength']) {
      result.push(`Maximum length of ${name} is ${errors?.['maxlength']['requiredLength']}.`)
    }
    if (errors?.['email']) {
      result.push(`${name} must be an email address.`)
    }
    if (errors?.['pattern']) {
      result.push(`${name} is not valid.`)
    }
    if (errors?.['invalidPhone']) {
      result.push(`${name} is invalid phone.`)
    }
    if (errors?.['invalidType']) {
      result.push(`${name} is invalid type.`)
    }

    return result.join('\n')
  }
}
