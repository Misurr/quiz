import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMultipleChoiceQuestionsComponent } from './view-multiple-choice-questions.component';

describe('ViewMultipleChoiceQuestionsComponent', () => {
  let component: ViewMultipleChoiceQuestionsComponent;
  let fixture: ComponentFixture<ViewMultipleChoiceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMultipleChoiceQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMultipleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
