import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { YouLeadApiClient } from '@you-lead/web/shared/api-clients';
import { CreateContactCommand } from 'libs/web/shared/api-clients/src/lib/generated/you-lead-api-client/models';

@Component({
  selector: 'you-lead-create-contact-dialog',
  templateUrl: './create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.css'],
})
export class CreateContactDialogComponent {
  public form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
  });

  public constructor(
    private _dialogRef: MatDialogRef<CreateContactDialogComponent>,
    private _snackBar: MatSnackBar,
    private _youLeadApi: YouLeadApiClient
  ) {}

  public get f() {
    return this.form.controls;
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public onAddContact(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const cmd: CreateContactCommand = {
      firstName: this.f.firstName.value?.trim(),
      lastName: this.f.lastName.value?.trim(),
      email: this.f.email.value?.trim(),
      phoneNumber: this.f.phoneNumber.value?.trim(),
      address: this.f.address.value?.trim(),
      city: this.f.city.value?.trim(),
      zipCode: this.f.zipCode.value?.trim(),
    };

    this._youLeadApi.contacts
      .post(cmd)
      .then(() => {
        this._dialogRef.close(true);
        this._snackBar.open('Successfully added contact', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500,
            panelClass: ['snackbar-success'],
        });
      })
      .catch(() => {
        this._dialogRef.close(false);
        this._snackBar.open('Something went wrong while adding contact', '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2500,
          panelClass: ['snackbar-danger'],
        });
      });
  }
}
