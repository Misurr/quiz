import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultipleChoiceQuestionsComponent } from './edit-multiple-choice-questions.component';

describe('EditMultipleChoiceQuestionsComponent', () => {
  let component: EditMultipleChoiceQuestionsComponent;
  let fixture: ComponentFixture<EditMultipleChoiceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMultipleChoiceQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMultipleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
