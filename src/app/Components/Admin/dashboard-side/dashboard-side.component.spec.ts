import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideComponent } from './dashboard-side.component';

describe('DashboardSideComponent', () => {
  let component: DashboardSideComponent;
  let fixture: ComponentFixture<DashboardSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
