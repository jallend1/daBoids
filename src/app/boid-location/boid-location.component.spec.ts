import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoidLocationComponent } from './boid-location.component';

describe('BoidLocationComponent', () => {
  let component: BoidLocationComponent;
  let fixture: ComponentFixture<BoidLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoidLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoidLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
