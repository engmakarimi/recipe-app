import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components';
import { ApiRecipeService } from 'src/app/shared/services';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, CardComponent,RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.scss'],
})
export class MyRecipeComponent {
  apiService = inject(ApiRecipeService);
  myRecipes$=this.apiService.getMyRecipe();
  addToMyRecipe(id: string) {
    this.apiService.addToMyRecipe(id);
  }
}
