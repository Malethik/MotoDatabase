import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <app-menu />
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
