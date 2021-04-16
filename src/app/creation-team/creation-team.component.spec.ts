import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTeamComponent } from './creation-team.component';

describe('CreationTeamComponent', () => {
  let component: CreationTeamComponent;
  let fixture: ComponentFixture<CreationTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
