import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GeocoderComponent } from './geocoder.component';
import { HttpClientModule } from '@angular/common/http';

describe('GeocoderComponent', () => {
  let component: GeocoderComponent;
  let fixture: ComponentFixture<GeocoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ GeocoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it(`should have as 'address' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.address).toEqual(undefined);
  }));


  it(`should have as 'lat' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.lat).toEqual(undefined);
  }));


  it(`should have as 'lng' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.lng).toEqual(undefined);
  }));
});
