import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 {{title}}</h1>
        <p>Now comes second Components,-</p>
        <my-component></my-component>
    `,
  directives:[MyComponentComponent]
})

export class AppComponent {
  title = 'My First Angular App';
}


import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 {{title}}</h1>
        <p>Now comes second Components,-</p>
        <my-component></my-component>
    `,
  directives:[MyComponentComponent]
})

export class AppComponent {
  title = 'My First Angular App';
}
