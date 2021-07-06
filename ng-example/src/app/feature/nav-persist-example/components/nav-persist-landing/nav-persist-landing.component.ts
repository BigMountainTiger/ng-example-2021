import { Component, OnInit } from '@angular/core';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-nav-persist-landing',
  template: 'app-nav-persist-landing',
  styles: []
})
export class NavPersistLandingComponent implements OnInit {

  constructor(private vagHistoryService: NavHistoryService) { }

  ngOnInit(): void {
    this.vagHistoryService.redirect({
      key: NavHistoryService.keys.nav_persist_example,
      default_url: 'nav-persist-example/a'
    });
  }

}
