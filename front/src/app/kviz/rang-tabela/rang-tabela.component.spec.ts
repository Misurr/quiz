import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangTabelaComponent } from './rang-tabela.component';

describe('RangTabelaComponent', () => {
  let component: RangTabelaComponent;
  let fixture: ComponentFixture<RangTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
