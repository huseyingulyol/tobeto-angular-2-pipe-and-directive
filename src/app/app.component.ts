import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoriesComponent,NavbarComponent,TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tobeto-angular-2-pipe-and-directive';
}
