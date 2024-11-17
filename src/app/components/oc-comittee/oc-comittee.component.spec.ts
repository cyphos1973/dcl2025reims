import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcComitteeComponent } from './oc-comittee.component';

describe('OcComitteeComponent', () => {
  let component: OcComitteeComponent;
  let fixture: ComponentFixture<OcComitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcComitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcComitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
