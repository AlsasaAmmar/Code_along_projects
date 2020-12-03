import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsNamesComponent } from './friends-names.component';

describe('FriendsNamesComponent', () => {
  let component: FriendsNamesComponent;
  let fixture: ComponentFixture<FriendsNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
