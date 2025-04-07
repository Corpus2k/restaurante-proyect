import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInterfaceComponent } from './category-interface.component';

describe('CategoryInterfaceComponent', () => {
  let component: CategoryInterfaceComponent;
  let fixture: ComponentFixture<CategoryInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
