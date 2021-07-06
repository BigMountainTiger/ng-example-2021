import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-nested-parent',
  templateUrl: './nested-parent.component.html',
  styleUrls: ['./nested-parent.component.scss']
})
export class NestedParentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    private log(text: string) {
      console.log(`${text}`);
    }

    constructor() {
      this.log('constructor');
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      this.log('ngOnChanges');
    }
  
    ngOnInit(): void {
      this.log('ngOnInit');
    };
  
    ngDoCheck(): void {
      this.log('ngDoCheck');
    }
  
    ngAfterContentInit(): void {
      this.log('ngAfterContentInit');
    }
  
    ngAfterContentChecked(): void {
      this.log('ngAfterContentChecked');
    }
  
    ngAfterViewInit(): void {
      this.log('ngAfterViewInit');
    }
  
    ngAfterViewChecked(): void {
      this.log('ngAfterViewChecked');
    }
  
    ngOnDestroy(): void {
      this.log('ngOnDestroy');
    }

    public FireEvent() {
      
    }
}
