import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppWelcomeDirective } from '../../directives/app-welcome.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule,MatTableModule,CommonModule,RouterModule,AppWelcomeDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
}