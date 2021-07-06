import { Component, OnInit } from '@angular/core';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-ag-grid-edit-button',
  templateUrl: './ag-grid-edit-button.component.html',
  styleUrls: ['./ag-grid-edit-button.component.scss']
})
export class AgGridEditButtonComponent implements OnInit {

  constructor(private navHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.navHistoryService.setUrl('ag-grid-example');
  }

}
