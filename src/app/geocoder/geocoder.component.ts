import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss']
})
export class GeocoderComponent implements OnInit {

  address: string = null;
  lat: string = null;
  lng: string = null;
  err: string = null;

  constructor() { }

  ngOnInit() {
  }

}
