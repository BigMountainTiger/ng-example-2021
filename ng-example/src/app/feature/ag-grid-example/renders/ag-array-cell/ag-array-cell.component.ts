import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-array-cell',
  templateUrl: './ag-array-cell.component.html',
  styleUrls: ['./ag-array-cell.component.scss']
})
export class AgArrayCellComponent implements OnInit {
  public items: string[] = [];
  public header: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public agInit(params: any): void {
      this.items = params.value;
      this.header = params.colDef.headerName;
  }

}
