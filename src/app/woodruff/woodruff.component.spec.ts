
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodruffComponent } from './woodruff.component';

describe('WoodruffComponent', () => {
  let component: WoodruffComponent;
  let fixture: ComponentFixture<WoodruffComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodruffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodruffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
