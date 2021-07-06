import { Component, OnInit } from '@angular/core';
import { NavHistoryService } from 'src/app/services/nav-history.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-editing',
  templateUrl: './ag-grid-editing.component.html',
  styleUrls: ['./ag-grid-editing.component.scss']
})
export class AgGridEditingComponent implements OnInit {

  public columnDefs: ColDef[] = [];
  public rowData: any;

  constructor(private navHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.navHistoryService.setUrl('ag-grid-example');

    this.columnDefs = [
      { field: 'id' },
      { field: 'name', editable: true },
    ];

    setTimeout(() => {
      this.rowData = [
        { id: 1, name: 'Name No.1' },
        { id: 2, name: 'Name No.2' },
        { id: 3, name: 'Name No.3' }
      ]
    }, 0.1 * 1000);
  }

  public cellEditingStarted(e: any) {
    // console.log(e);
  }

  public cellEditingStopped(e: any) {
    // console.log(JSON.stringify(e.data));
  }

  public cellValueChanged(e: any) {
    console.log(e);
  }
}
