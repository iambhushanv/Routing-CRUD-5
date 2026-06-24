import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsDashComponent } from './produts-dash.component';

describe('ProdutsDashComponent', () => {
  let component: ProdutsDashComponent;
  let fixture: ComponentFixture<ProdutsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutsDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
