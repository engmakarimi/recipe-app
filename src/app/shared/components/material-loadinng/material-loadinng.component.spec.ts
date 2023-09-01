import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLoadinngComponent } from './material-loadinng.component';

describe('MaterialLoadinngComponent', () => {
  let component: MaterialLoadinngComponent;
  let fixture: ComponentFixture<MaterialLoadinngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialLoadinngComponent]
    });
    fixture = TestBed.createComponent(MaterialLoadinngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
