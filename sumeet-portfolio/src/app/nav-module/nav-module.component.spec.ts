import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModuleComponent } from './nav-module.component';

describe('NavModuleComponent', () => {
  let component: NavModuleComponent;
  let fixture: ComponentFixture<NavModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
