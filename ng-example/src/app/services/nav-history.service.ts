import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavHistoryService {
  public static keys = {
    nav_persist_example: 'nav-persist-example',
    ag_grid_example: 'ag-grid-example'
  }

  private navHistorys: any = {};

  constructor(private router: Router) {}

  public setUrl(key: string) {
    this.navHistorys[key] = this.router.url;
  }

  public redirect(option: any) {
    const path = this.navHistorys[option.key] || option.default_url;
    this.router.navigateByUrl(path, { replaceUrl: true })
  }
}
