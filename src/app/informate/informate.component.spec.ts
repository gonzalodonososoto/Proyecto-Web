import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformateComponent } from './informate.component';

describe('InformateComponent', () => {
  let component: InformateComponent;
  let fixture: ComponentFixture<InformateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
