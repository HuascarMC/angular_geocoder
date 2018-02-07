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

  it(`should have 'address' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.address).toEqual(undefined);
  }));


  it(`should have 'lat' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.lat).toEqual(undefined);
  }));


  it(`should have 'lng' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.lng).toEqual(undefined);
  }));

  it(`should have 'api_key' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.api_key).toEqual('AIzaSyDaWjtIBo52j7qrtJKsr7ykERqQ5MywinE');
  }));

  it(`should have 'error' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.error).toEqual('');
  }));

  it(`should have 'searchCount' property`, async(() => {
    // const fixture = TestBed.createComponent(GeocoderComponent);
    const GeocoderComponent = fixture.debugElement.componentInstance;
    expect(GeocoderComponent.searchCount).toEqual(1);
  }));

  xit(`should update 'latitude'`, async(() => {
   const GeocoderComponent = fixture.debugElement.componentInstance;
   GeocoderComponent.address = '37-39 Cowgate Edinburgh';
   GeocoderComponent.makeRequest();
   console.log(GeocoderComponent)
   expect(GeocoderComponent.lat).toEqual(53);
  }));

  xit(`should update 'longitude'`, async(() => {
   const GeocoderComponent = fixture.debugElement.componentInstance;
   GeocoderComponent.address = '37-39 Cowgate Edinburgh';
   GeocoderComponent.makeRequest();
   console.log(GeocoderComponent.lng)
   expect(GeocoderComponent.lng).toEqual(-3);
  }));
});
