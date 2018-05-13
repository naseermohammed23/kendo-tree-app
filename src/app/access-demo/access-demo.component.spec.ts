import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDemoComponent } from './access-demo.component';

describe('AccessDemoComponent', () => {
  let component: AccessDemoComponent;
  let fixture: ComponentFixture<AccessDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
