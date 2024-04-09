import { Component, input } from '@angular/core';
import { Moto } from '../../core/model/model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-content>make:{{ moto().make }}</mat-card-content>
      <mat-card-content>model:{{ moto().model }}</mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class CardComponent {
  moto = input<Moto>({} as Moto);
}
