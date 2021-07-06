import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ladda-example',
  templateUrl: './ladda-example.component.html',
  styleUrls: ['./ladda-example.component.scss']
})
export class LaddaExampleComponent implements OnInit {
  public isLadda: boolean;

  constructor() {
    this.isLadda = false;
  }

  ngOnInit(): void {
  }

  public ClickMe() {
    this.isLadda = true;
    console.log(this.isLadda);

    setTimeout(() => {
      this.isLadda = false;
      console.log(this.isLadda);
    }, 1000);
  }
}
