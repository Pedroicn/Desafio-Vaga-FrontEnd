import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddressComponent } from './search-address.component';

describe('SearchAddressComponent', () => {
  let component: SearchAddressComponent;
  let fixture: ComponentFixture<SearchAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAddressComponent]
    });
    fixture = TestBed.createComponent(SearchAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
