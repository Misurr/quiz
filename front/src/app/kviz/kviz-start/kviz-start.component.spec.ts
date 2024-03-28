import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizStartComponent } from './kviz-start.component';

describe('KvizStartComponent', () => {
  let component: KvizStartComponent;
  let fixture: ComponentFixture<KvizStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
