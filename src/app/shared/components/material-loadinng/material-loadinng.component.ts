import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../services';

@Component({
  selector: 'app-material-loadinng',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule],
  templateUrl: './material-loadinng.component.html',
  styleUrls: ['./material-loadinng.component.scss']
})
export class MaterialLoadinngComponent {
  loadingService = inject(LoadingService);

}
