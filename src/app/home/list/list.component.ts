import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template: ` <div class="main"><p>list works!</p></div> `,
  styles: `
  :host{
    .main{
       height: 69.9vh;
  width: 100%;
    }

  }`,
})
export default class ListComponent {}
