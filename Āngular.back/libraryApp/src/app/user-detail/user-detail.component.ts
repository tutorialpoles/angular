import { OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, Component} from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log('Inside: constructor');
  }

  ngOnChanges(){
    console.log("Inside: ngOnChanges");
  }

  ngOnInit(){
    console.log("Inside: ngOnInit");
  }

  ngDoCheck(){
    console.log("Inside: ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("Inside: ngAfterContentInit");
  }
  
  ngAfterContentChecked(){
    console.log("Inside: ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("Inside: ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Inside: ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("Inside: ngOnDestroy");
  }
}
