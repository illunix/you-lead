import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { YouLeadApiClient } from '@you-lead/web/shared/api-clients';
import { ContactDto, UpdateContactCommand } from 'libs/web/shared/api-clients/src/lib/generated/you-lead-api-client/models';

@Component({
  selector: 'you-lead-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css'],
})
export class EditContactDialogComponent implements OnInit {
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
    private _dialogRef: MatDialogRef<EditContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public contact: ContactDto,
    private _snackBar: MatSnackBar,
    private _youLeadApi: YouLeadApiClient
  ) { }

  public ngOnInit(): void {
    this.fillFormWithData();
  }

  public get f() {
    return this.form.controls;
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public onSaveContact(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const cmd: UpdateContactCommand = {
      firstName: this.f.firstName.value?.trim(),
      lastName: this.f.lastName.value?.trim(),
      email: this.f.email.value?.trim(),
      phoneNumber: this.f.phoneNumber.value?.trim(),
      address: this.f.address.value?.trim(),
      city: this.f.city.value?.trim(),
      zipCode: this.f.zipCode.value?.trim(),
    };

    this._youLeadApi.contacts.byId(this.contact.id!).put(cmd)
      .then(() => {
        this._dialogRef.close(true);
        this._snackBar.open('Successfully updated contact', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2500,
            panelClass: ['snackbar-success'],
        });
      })
      .catch(() => {
        this._dialogRef.close(false);
        this._snackBar.open('Something went wrong while updating contact', '', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2500,
          panelClass: ['snackbar-danger'],
        });
      });
  }

  private fillFormWithData(): void {
    this.f.firstName.setValue(this.contact.firstName!);
    this.f.lastName.setValue(this.contact.lastName!);
    this.f.email.setValue(this.contact.email!);
    this.f.phoneNumber.setValue(this.contact.phoneNumber!);
    this.f.address.setValue(this.contact.address!);
    this.f.city.setValue(this.contact.city!);
    this.f.zipCode.setValue(this.contact.zipCode!);
  }
}
