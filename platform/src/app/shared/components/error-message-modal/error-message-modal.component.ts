import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-message-modal',
  templateUrl: './error-message-modal.component.html',
  styleUrls: ['./error-message-modal.component.scss']
})
export class ErrorMessageModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
