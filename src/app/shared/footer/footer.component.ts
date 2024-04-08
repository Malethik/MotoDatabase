import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: ` <div><p>footer works!</p></div> `,
  styles: `
  :host{
    div{
         height: 10vh;
  width: 100%;
    }

  }`,
})
export class FooterComponent {}
