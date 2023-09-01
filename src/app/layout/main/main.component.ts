import { map } from 'rxjs';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiRecipeService } from 'src/app/shared/services';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  apiService = inject(ApiRecipeService);
  myRecipeNumbers$ = this.apiService.getMyRecipe().pipe(map((p) => p.length));
}
