import { Component, OnInit } from '@angular/core';

import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-ag-grid-example-b',
  templateUrl: './ag-grid-example-b.component.html',
  styleUrls: ['./ag-grid-example-b.component.scss']
})
export class AgGridExampleBComponent implements OnInit {

  public autoGroupColumnDef =  {
    colId: 'group',
    headerName: '',
    minWidth: 400
  };

  public columnDefs = [
    { 
      field: 'countryName',
      rowGroup: true, 
      rowGroupIndex: 0 
    },
    { 
      field: 'companyName', 
      rowGroup: true, 
      rowGroupIndex: 1 
    },
    { 
      field: 'officeName', 
      rowGroup: true, 
      rowGroupIndex: 2 
    },
    { field: 'data1', sortable: true, filter: true },
    { field: 'data2', sortable: true, filter: true },
  ];

  public rowData: any[] = [];
  
  constructor(private vagHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.vagHistoryService.setUrl('ag-grid-example');

    const data = [];

      for (let country = 0; country < 3; country++) {
        for (let company = 0; company < 3; company++) {
          for (let office = 0; office < 3; office++) {
            for (let i = 0; i < 2; i++) {

              const entry = {
                country: {
                  id: country,
                  name: 'Country No.' + country
                },
                countryName: 'Country No.' + country,
                company: {
                  id: company,
                  name: 'Company No.' + company
                },
                companyName: 'Company No.' + company,
                office: {
                  id: office,
                  name: 'Office No.' + office
                },
                officeName: 'Office No.' + office,
                data1: 'Data-1 No.' + i,
                data2: 'Data-2 No.' + i,
              };

              data.push(entry);
            }

          }
        }
      }

    this.rowData = data;
  }

}
