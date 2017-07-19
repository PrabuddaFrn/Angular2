import {Component} from 'angular2/core';
import {TestComponents} from "./test.components";
import {OnInit} from "angular2/core";

@Component({
  selector:'my-component',
  template:`Hai Im <span [style.color]="inputElemet.value === 'yes'? 'red':'blue'" >{{name}} </span> 
  I am {{i+y}} Years Old. this is my very first Angular2 component
  <span [class.is-awesome]="inputElemet.value === 'yes' " >Its awesome!</span>
  <br> <br>
  Is it awesome ?   <input type="text" #inputElemet  (keyup)="0" />
  <br><br>
  <button [disabled] = "inputElemet.value !== 'yes'"  >Only enable if Yes was entered</button>
  <test></test>
`,styleUrls:['src/css/mycomponent.css'],
  directives:[TestComponents]
})

export class MyComponentComponent implements OnInit{
  name:string;
  i = 4;
  y = 34;

  ngOnInit(): any {
    this.name = "Max";
  }


}
