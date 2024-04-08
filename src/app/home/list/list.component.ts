import { Component, OnInit, inject } from '@angular/core';
import { Moto } from '../../core/model/model';
import { ServerService } from '../../core/server/server.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <div class="main">
      <!--     @for (item of moto; track $index) {
      <app-card />
      } -->
    </div>
  `,
  styles: `
  :host{
    .main{
       height: 69.9vh;
  width: 100%;
    }

  }`,
  imports: [CardComponent],
})
export default class ListComponent implements OnInit {
  moto!: Moto;

  private service = inject(ServerService);

  ngOnInit(): void {
    this.service.getMoto().subscribe({
      next: (data) => {
        this.moto = data;
        console.log(this.moto);
      },
    });
  }
}
