import { Component, OnInit } from '@angular/core';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-ag-grid-landing',
  template: 'app-ag-grid-landing',
  styles: []
})
export class AgGridLandingComponent implements OnInit {

  constructor(private vagHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.vagHistoryService.redirect({
      key: NavHistoryService.keys.ag_grid_example,
      default_url: 'ag-grid-example/a'
    });
  }
}
