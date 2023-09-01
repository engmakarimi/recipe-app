import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { Recipe } from '../../types';
import { HoverBackgroundColorDirective } from '../../directives';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HoverBackgroundColorDirective,MatChipsModule],
  hostDirectives:[HoverBackgroundColorDirective],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() recipe!:Recipe

}
