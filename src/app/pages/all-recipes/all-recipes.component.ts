import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRecipeService } from 'src/app/shared/services';
import { CardComponent, SearchComponent } from 'src/app/shared/components';
import { Recipe } from 'src/app/shared/types';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    CardComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent {
  apiService = inject(ApiRecipeService);

  executeSearch(list: Recipe[]) {
    this.apiService.Recipes = list;
  }
  addToMyRecipe(id: string) {
    this.apiService.addToMyRecipe(id);
  }
}
