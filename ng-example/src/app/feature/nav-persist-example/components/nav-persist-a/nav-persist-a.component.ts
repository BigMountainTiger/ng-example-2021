import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavHistoryService } from 'src/app/services/nav-history.service';

@Component({
  selector: 'app-nav-persist-a',
  templateUrl: './nav-persist-a.component.html',
  styleUrls: ['./nav-persist-a.component.scss']
})
export class NavPersistAComponent implements OnInit {
  public v: number = 0;

  constructor(private vagHistoryService: NavHistoryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((p) => {
      this.v = p.v || 0;
      this.vagHistoryService.setUrl(NavHistoryService.keys.nav_persist_example);
    });
  }

}
