import { Injectable, inject, signal } from '@angular/core';
import { Moto } from '../model/model';
import { ServerService } from '../server/server.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private service = inject(ServerService);
  private _motoState = signal<Moto[]>([]);
  public motoState = this._motoState.asReadonly();
  constructor() {}
  loadMoto() {
    this.service.getMoto().subscribe((motos) => {
      this._motoState.update(() => [motos]); //togliere parentesi quare
    });
  }
  addMoto({ make, model }: Moto) {
    const newMoto: Moto = { make: make, model: model };
  }
}
