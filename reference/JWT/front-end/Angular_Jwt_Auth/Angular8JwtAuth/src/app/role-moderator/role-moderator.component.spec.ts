import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleModeratorComponent } from './role-moderator.component';

describe('RoleModeratorComponent', () => {
  let component: RoleModeratorComponent;
  let fixture: ComponentFixture<RoleModeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleModeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
