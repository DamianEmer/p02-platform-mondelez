import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConfirmModalComponent } from './save-confirm-modal.component';

describe('SaveConfirmModalComponent', () => {
  let component: SaveConfirmModalComponent;
  let fixture: ComponentFixture<SaveConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
