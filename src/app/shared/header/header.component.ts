import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
  styles: `
  :host
  {div{
    display:flex;
    justify-content: center;
    align-items:center;
    height: 10vh;
  width: 100%;
  }

  }`,
})
export class HeaderComponent {
  title = 'Moto Database';
}
