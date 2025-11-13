import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSection } from './tabs-section';

describe('TabsSection', () => {
  let component: TabsSection;
  let fixture: ComponentFixture<TabsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
