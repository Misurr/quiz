import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizTrueFalseComponent } from './kviz-true-false.component';

describe('KvizTrueFalseComponent', () => {
  let component: KvizTrueFalseComponent;
  let fixture: ComponentFixture<KvizTrueFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizTrueFalseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
