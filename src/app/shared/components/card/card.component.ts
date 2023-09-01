import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../types';
import { HoverBackgroundColorDirective } from '../../directives';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HoverBackgroundColorDirective],
  hostDirectives:[HoverBackgroundColorDirective],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() recipe!:Recipe

}
