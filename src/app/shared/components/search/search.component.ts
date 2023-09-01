import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  Observable,
  of,
  map,
  tap,
} from 'rxjs';
import { Recipe } from '../../types';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTermControl = new FormControl('');
  @Input() list: Observable<Recipe[]> = of([]);
  @Output() searchEvent:EventEmitter<Recipe[]>=new EventEmitter();

  ngOnInit() {
    this.searchTermControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        this.list.pipe(
          tap((p) => {
            if (searchTerm) {
              const normalizedValue=searchTerm.toLocaleLowerCase()
              const result = p.filter(
                (item) =>
                  item.title.toLocaleLowerCase().includes(normalizedValue) ||
                  item.ingredients.map(ing => ing.toLocaleLowerCase()).includes(normalizedValue)
              );
              this.searchEvent.emit(result);
            }else{
              this.searchEvent.emit(p);
            }
          })
        )
      )
    ).subscribe();
  }
}
