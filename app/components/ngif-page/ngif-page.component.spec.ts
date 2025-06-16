import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifPageComponent } from './ngif-page.component';

describe('NgifPageComponent', () => {
  let component: NgifPageComponent;
  let fixture: ComponentFixture<NgifPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
