import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-container',
  templateUrl: './life-cycle-container.component.html',
  styleUrls: ['./life-cycle-container.component.scss']
})
export class LifeCycleContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
