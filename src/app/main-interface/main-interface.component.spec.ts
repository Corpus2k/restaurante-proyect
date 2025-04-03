import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInterfaceComponent } from './main-interface.component';

describe('MainInterfaceComponent', () => {
  let component: MainInterfaceComponent;
  let fixture: ComponentFixture<MainInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
