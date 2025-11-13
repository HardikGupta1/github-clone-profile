import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionChart } from './contribution-chart';

describe('ContributionChart', () => {
  let component: ContributionChart;
  let fixture: ComponentFixture<ContributionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
