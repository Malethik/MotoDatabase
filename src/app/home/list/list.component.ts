import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { StateService } from '../../core/state/state.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="main">
      @for (item of motoService.motoState(); track $index) {
      <app-card [moto]="item"></app-card>
      }
    </div>
  `,
  styles: `
  :host{
    .main{
       height: 69.9vh;
  width: 100%;
    }

  }`,
})
export default class ListComponent /* implements OnInit */ {
  /* moto: Moto[] = []; */

  motoService = inject(StateService);

  /* ngOnInit(): void {
    this.service.getMoto().subscribe({
      next: (data: Moto[]) => {
        this.moto = data;
        console.log(this.moto);
      },
    });
  } */
}
