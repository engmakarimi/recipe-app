import { Routes } from '@angular/router';
import { MainComponent } from './layout';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/all-recipes' },
    {
        path: '',
        component:MainComponent,
        children: [
          {
            path: 'all-recipes',
            loadComponent: () =>
              import(
                './pages/all-recipes/all-recipes.component'
              ).then((m) => m.AllRecipesComponent),
          },
          {
            path: 'my-recipes',
            loadComponent: () =>
              import(
                './pages/my-recipe/my-recipe.component'
              ).then((m) => m.MyRecipeComponent),
          },
        
        ],
      },
];
