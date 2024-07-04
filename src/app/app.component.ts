import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './components/employee-add-edit/employee-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng15-crud-app';

  constructor(private _dialog: MatDialog) {

  }

  openAddEditEmployeeForm() {
    this._dialog.open(EmployeeAddEditComponent);
  }
}
