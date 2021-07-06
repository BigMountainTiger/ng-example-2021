import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-nav-persist-b',
  templateUrl: './nav-persist-b.component.html',
  styleUrls: ['./nav-persist-b.component.scss']
})
export class NavPersistBComponent implements OnInit {
  public v: number = 0;

  constructor(private vagHistoryService: NavHistoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p) => {
      this.v = p.v || 0;
      this.vagHistoryService.setUrl(NavHistoryService.keys.nav_persist_example);
    });
  }

}
