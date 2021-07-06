import { Component, OnInit } from '@angular/core';
import { NavHistoryService } from 'src/app/services/nav-history.service';
import { AgArrayCellComponent } from '../../renders/ag-array-cell/ag-array-cell.component';

import { ColDef, SideBarDef, GridOptions } from "ag-grid-community";

@Component({
  selector: 'app-ag-grid-sorting',
  templateUrl: './ag-grid-sorting.component.html',
  styleUrls: ['./ag-grid-sorting.component.scss']
})
export class AgGridSortingComponent implements OnInit {

  public gridOptions: GridOptions = {};
  public sideBarDefs: SideBarDef = {};
  public columnDefs: ColDef[] = [];
  public rowData: any;

  constructor(private navHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.navHistoryService.setUrl('ag-grid-example');

    this.sideBarDefs = { toolPanels: ['columns', 'filters'] };
    
    this.columnDefs = [
      { field: 'name', sortable: true, filter: true },
      {
        field: 'data',
        sortable: true,
        comparator: (valueA, valueB) => {
          // Comparator is needed so values are treated as numbers
          const a = (valueA && (valueA.length > 0))? valueA[0]: Number.MIN_SAFE_INTEGER;
          const b = (valueB && (valueB.length > 0))? valueB[0]: Number.MIN_SAFE_INTEGER;

          return (a == b)? 0: ((a > b)? 1: -1);
        },
        cellRendererFramework: AgArrayCellComponent,
        filter: true
      },
    ];

    setTimeout(() => {
      this.rowData = [
        {
          name: 'No.1',
          data: []
        },
        {
          name: 'No.2',
          data: [2000, 2001]
        },
        {
          name: 'No.3',
          data: [3000, 3001]
        },
        {
          name: 'No.4',
          data: [1000001, 1000002]
        }
      ];
    }, 0.25 * 1000);
  }

  public addEntry() {
    this.rowData[0].data.push(5000);

    // clone to be able to push
    // this.rowData = this.rowData.slice(0);
  }

}

