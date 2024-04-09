import { Injectable, inject, signal } from '@angular/core';
import { Moto } from '../model/model';
import { ServerService } from '../server/server.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private serverService = inject(ServerService);
  private _motoState = signal<Moto[]>([]);
  public motoState = this._motoState.asReadonly();

  constructor() {
    this.loadServerMoto();
  }

  loadServerMoto() {
    this.serverService.getMoto().subscribe((motos) => {
      this._motoState.update(() => motos);
    });
  }
  addMoto(data: Moto): void {
    this.serverService.addMoto(data).subscribe((moto) => {
      this._motoState.update((motos) => [...motos, moto]);
    });
  }
}
