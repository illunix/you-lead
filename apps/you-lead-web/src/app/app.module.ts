import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { PlusCircle, Edit2 } from 'angular-feather/icons';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateContactDialogComponent } from './components/create-contact-dialog/create-contact-dialog.component';
import { EditContactDialogComponent } from './components/edit-contact-dialog/edit-contact-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

const icons = {
  PlusCircle,
  Edit2
};

@NgModule({
  declarations: [
    AppComponent,
    CreateContactDialogComponent,
    EditContactDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeatherModule.pick(icons),
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
