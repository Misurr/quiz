import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMultipleChoiceQuestionsComponent } from './new-multiple-choice-questions.component';

describe('NewMultipleChoiceQuestionsComponent', () => {
  let component: NewMultipleChoiceQuestionsComponent;
  let fixture: ComponentFixture<NewMultipleChoiceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMultipleChoiceQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMultipleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
