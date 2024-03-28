import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizConnectingQuestionsComponent } from './kviz-connecting-questions.component';

describe('KvizConnectingQuestionsComponent', () => {
  let component: KvizConnectingQuestionsComponent;
  let fixture: ComponentFixture<KvizConnectingQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizConnectingQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizConnectingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
