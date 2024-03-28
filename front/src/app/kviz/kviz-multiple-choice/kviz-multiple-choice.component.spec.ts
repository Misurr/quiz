import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizMultipleChoiceComponent } from './kviz-multiple-choice.component';

describe('KvizMultipleChoiceComponent', () => {
  let component: KvizMultipleChoiceComponent;
  let fixture: ComponentFixture<KvizMultipleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizMultipleChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
