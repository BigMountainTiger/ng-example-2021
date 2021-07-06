import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-persist-container',
  templateUrl: './nav-persist-container.component.html',
  styleUrls: ['./nav-persist-container.component.scss']
})
export class NavPersistContainerComponent implements OnInit {
  private va:number;
  private vb:number;

  constructor(private router: Router) {
    this.va = 0;
    this.vb = 0;
  }

  ngOnInit(): void {
  }

  public GotoA() {
    this.router.navigate(['/nav-persist-example/a']);
  }

  public GotoAWithParams() {
    this.router.navigate(['/nav-persist-example/a'], {queryParams: {
      v: ++this.va
    }});
  }

  public GotoB() {
    this.router.navigate(['/nav-persist-example/b']);
  }

  public GotoBWithParams() {
    this.router.navigate(['/nav-persist-example/b'], {queryParams: {
      v: ++this.vb
    }});
  }
}
