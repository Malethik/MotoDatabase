import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  template: `
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Home</button>
      <button mat-menu-item>Sell bike</button>
      <button mat-menu-item>Add new bike</button>
      <button mat-menu-item>About us</button>
      <button mat-menu-item>Contact us</button>
    </mat-menu>
  `,
  styles: ``,
})
export class MenuComponent {}
