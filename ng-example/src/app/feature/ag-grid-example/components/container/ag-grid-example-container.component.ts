import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ag-grid-example-container',
  templateUrl: './ag-grid-example-container.component.html',
  styleUrls: ['./ag-grid-example-container.component.scss']
})
export class AgGridExampleContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
