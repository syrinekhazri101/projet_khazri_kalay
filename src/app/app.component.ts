import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from "./nav/nav.component";
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, FooterComponent,MenuComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techsouk';
}
