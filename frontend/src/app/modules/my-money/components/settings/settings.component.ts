import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routeCreator} from "../../my-money.routes";
import {FormBuilder, FormControlStatus, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TwaService} from "../../../../common/services/twa.service";
import {Subscription} from "rxjs";
import {FormTransaction} from "../../domains/transactions/interfaces/transaction";
import {Setting} from "../../domains/setting/interface/setting";
import {SettingsService} from "../../domains/setting/services/settings.service";
import {ReactiveForm} from "../../../../common/components/reactive-form.component";
import {DateInputComponent} from "../transactions/_form/components/date-input.component";

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DateInputComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent extends ReactiveForm implements OnInit, OnDestroy {
  settingForm: FormGroup = this.formBuilder.group({})
  protected settingFormSubscription?: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private twa: TwaService,
    private service: SettingsService,
    protected location: Location,
  ) {
    super()
  }


  ngOnInit() {
    const setting = this.service.item()
    this.settingForm.addControl('maxPerMonth', this.formBuilder.control(setting.maxPerMonth ?? 1000, [
      Validators.required,
      Validators.min(1),
      Validators.max(1_000_000_000),
    ]))
    this.settingFormSubscription = this.settingForm.statusChanges
      .subscribe((status: FormControlStatus) => this.twa.mainButtonIsActive(status == "VALID"))
    this.twa.backButtonOnClick(() => this.goBack())
    this.twa.setMainButton(
      {text: 'Save', is_visible: true, is_active: true, has_shine_effect: true},
      () => this.save(),
    )

  }

  ngOnDestroy() {
    this.settingFormSubscription?.unsubscribe()
  }


  save(): void {
    if (this.settingForm.invalid) {
      return
    }

    const form: Setting = this.settingForm.value
    this.service.save(form)
    this.settingForm.reset()
    this.goBack()
  }

  goBack(): void {
    this.location.back()
  }

  private get maxPerMonth() {
    return this.settingForm.get('maxPerMonth');
  }

  get maxPerMonthErrors() {
    return this.errors(this.maxPerMonth);
  }

  get isInvalidMaxPerMonth(): boolean | undefined {
    return this.isInvalid(this.maxPerMonth)
  }

  protected readonly routeCreator = routeCreator;
}
