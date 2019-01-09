import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceComponentComponent } from './piece-component.component';

describe('PieceComponentComponent', () => {
  let component: PieceComponentComponent;
  let fixture: ComponentFixture<PieceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
