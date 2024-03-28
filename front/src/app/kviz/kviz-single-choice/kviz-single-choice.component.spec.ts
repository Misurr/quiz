import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizSingleChoiceComponent } from './kviz-single-choice.component';

describe('KvizSingleChoiceComponent', () => {
  let component: KvizSingleChoiceComponent;
  let fixture: ComponentFixture<KvizSingleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizSingleChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizSingleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
