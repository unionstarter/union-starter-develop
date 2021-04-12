import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardRowTitleComponent } from './info-card-row-title.component';

describe('InfoCardRowTitleComponent', () => {
  let component: InfoCardRowTitleComponent;
  let fixture: ComponentFixture<InfoCardRowTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardRowTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardRowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
