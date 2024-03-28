import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvizPostavkeComponent } from './kviz-postavke.component';

describe('KvizPostavkeComponent', () => {
  let component: KvizPostavkeComponent;
  let fixture: ComponentFixture<KvizPostavkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvizPostavkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvizPostavkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
