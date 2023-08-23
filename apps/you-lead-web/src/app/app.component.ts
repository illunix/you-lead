import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { YouLeadApiClient } from '@you-lead/web/shared/api-clients';
import { ContactDto, ContactDtoPagedDto } from 'libs/web/shared/api-clients/src/lib/generated/you-lead-api-client/models';
import { Observable, Subject, from, map, takeUntil, tap } from 'rxjs';
import { CreateContactDialogComponent } from './components/create-contact-dialog/create-contact-dialog.component';
import { EditContactDialogComponent } from './components/edit-contact-dialog/edit-contact-dialog.component';
import { ContactsRequestBuilderGetRequestConfiguration } from 'libs/web/shared/api-clients/src/lib/generated/you-lead-api-client/contacts/contactsRequestBuilderGetRequestConfiguration';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'you-lead-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public contactsData$ = new Observable<ContactDtoPagedDto>
  public timeout: any = null;
  public pageEvent: PageEvent = { pageIndex: 0, pageSize: 10 } as PageEvent;

  private _unsubscribe$ = new Subject<void>();

  public constructor(
    private _youLeadApi: YouLeadApiClient,
    private _dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.getContacts(this.pageEvent);
  }

  public onShowAddContactDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = 'dialog-container';
    dialogConfig.width = '800px';
    this._dialog
      .open(CreateContactDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((q: boolean) => {
        if (q) {
          this.getContacts(this.pageEvent);
        }
      });
  }

  public onShowEditContactDialog(contact: ContactDto): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = 'dialog-container';
    dialogConfig.width = '800px';
    dialogConfig.data = contact;
    this._dialog
      .open(EditContactDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((q: boolean) => {
        if (q) {
          this.getContacts(this.pageEvent);
        }
      });
  }

  public onKeySearch(event: any) {
    clearTimeout(this.timeout);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.getContacts(
          $this.pageEvent,
          event.target.value,
        );
      }
    }, 300);
  }

  public onSearch(event: any): void {
    this.getContacts(event.target.value);
  }

  public getContacts(
    event: PageEvent,
    email = '',
  ): void {
    const conf: ContactsRequestBuilderGetRequestConfiguration = {
      queryParameters: {
        email: email,
        pageNumber: event.pageIndex,
        pageSize: event.pageSize
      }
    };

    this.contactsData$ = from(this._youLeadApi.contacts.get(conf))
      .pipe(
        map(q => q!),
        takeUntil(this._unsubscribe$),
        tap(q => this.pageEvent.length = q.totalItems!)
      );
  }
}
