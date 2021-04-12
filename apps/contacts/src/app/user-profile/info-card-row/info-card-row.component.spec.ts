import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardRowComponent } from './info-card-row.component';

describe('InfoCardRowComponent', () => {
  let component: InfoCardRowComponent;
  let fixture: ComponentFixture<InfoCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
