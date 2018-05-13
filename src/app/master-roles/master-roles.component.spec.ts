import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRolesComponent } from './master-roles.component';

describe('MasterRolesComponent', () => {
  let component: MasterRolesComponent;
  let fixture: ComponentFixture<MasterRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
