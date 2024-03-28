import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangTabelaKrajComponent } from './rang-tabela-kraj.component';

describe('RangTabelaKrajComponent', () => {
  let component: RangTabelaKrajComponent;
  let fixture: ComponentFixture<RangTabelaKrajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangTabelaKrajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangTabelaKrajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
