import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorMessageModalComponent } from '../components/error-message-modal/error-message-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor( private dialog: MatDialog) { }

  openLoadErrorDialog(data): void {
    const dialogRef = this.dialog.open(ErrorMessageModalComponent, {
      width: '500',
      data: data
    });
  }

}
