import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-ag-grid-example-a',
  templateUrl: './ag-grid-example-a.component.html',
  styleUrls: ['./ag-grid-example-a.component.scss']
})
export class AgGridExampleAComponent implements OnInit {
  @ViewChild('mygrid') grid: any;
  private gridApi: any;
  private gridColumnApi: any;

  public columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'hidden_field', sortable: true, filter: true }
  ];

  public gridOptions = {
    defaultColDef: {
      resizable: true,
    }
  };

  public rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000, hidden_field: 'Is hidden' },
      { make: 'Ford', model: 'Mondeo', price: 32000, hidden_field: 'Is hidden' },
      { make: 'Porsche', model: 'Boxter', price: 72000, hidden_field: 'Is hidden' }
  ];
  
  constructor(private vagHistoryService: NavHistoryService,
    private activatedRoute: ActivatedRoute  
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p) => {
      this.vagHistoryService.setUrl('ag-grid-example');
    });
  }

  public onGridReady(event: any) {
    // The gridApi and gridColumnApi can be passed in by event
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
  }

  public Resize() {
    // Use columnApi passed in by event
    this.gridColumnApi.autoSizeColumn("make");
  }

  private autoSizeColumn(colName: string) {
    const api = (this.grid || {}).columnApi;
    if (! api) {
      return;
    }

    api.autoSizeColumn(colName);
  }

  public gridSizeChanged(event: any) {
    this.autoSizeColumn('make');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // No need to un-register the event using @HostListener
    // console.log('Window resized');
    this.autoSizeColumn('make');
  }
}
