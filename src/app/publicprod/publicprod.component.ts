import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-publicprod',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,NavComponent],
  templateUrl: './publicprod.component.html',
  styleUrl: './publicprod.component.css'
})
export class PublicprodComponent {

}
