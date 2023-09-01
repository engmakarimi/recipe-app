import { Injectable, inject } from '@angular/core';
import { RECIPE_DATA } from 'src/app/mock';
import { Recipe } from '../types';
import {
  BehaviorSubject,
  Observable,
  of,
  map,
  tap,
  delay,
  switchMap,
} from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRecipeService {
  storageService = inject(StorageService);

 private isLoading = new BehaviorSubject<boolean>(false);

  setLoadingState(state: boolean) {
    this.isLoading.next(state);
  }

  getLoadingState() {
    return this.isLoading.asObservable();
  }
  private list = [...RECIPE_DATA];
  private rawRecipeListSubject = new BehaviorSubject<Recipe[]>([
    ...RECIPE_DATA,
  ]);
  private rawRecipeList$ = this.rawRecipeListSubject.asObservable();
  get RawRecipeList$() {
    this.setLoadingState(true);
    return of(null).pipe(
      
      tap(() => (this.setLoadingState(false))),
      switchMap(() => this.rawRecipeList$)
    );
  }
  set RawRecipeList(list: Recipe[]) {
    this.rawRecipeListSubject.next(list);
  }

  private recipesSubject = new BehaviorSubject<Recipe[]>([...RECIPE_DATA]);
  private recipes$ = this.recipesSubject.asObservable();
  get Recipes$() {
    return this.recipes$;
  }

  set Recipes(list: Recipe[]) {
    this.recipesSubject.next(list);
  }

  getMyRecipe(): Observable<Recipe[]> {
    return this.rawRecipeList$.pipe(
      map((p) => p.filter((item) => item.isSaved === true))
    );
  }
  addToMyRecipe(id: string) {
    this.RawRecipeList = this.list.map((item) => {
      if (item.id === id) item.isSaved = !item.isSaved;
      return item;
    });
  }
  
}
