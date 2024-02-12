import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresListComponent } from './titres-list.component';

describe('TitresListComponent', () => {
  let component: TitresListComponent;
  let fixture: ComponentFixture<TitresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitresListComponent]
    });
    fixture = TestBed.createComponent(TitresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
