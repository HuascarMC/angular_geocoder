import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss']
})

export class GeocoderComponent implements OnInit {

  address: string = null;
  lat: string = null;
  lng: string = null;
  api_key: string = 'AIzaSyDaWjtIBo52j7qrtJKsr7ykERqQ5MywinE';
  error: string = ''
  searchCount = 0;

  constructor(private http: HttpClient) { }

  makeRequest(): void {
   this.http.get(
   'https://maps.googleapis.com/maps/api/geocode/json?address='
    + this.address + '&key=' + this.api_key).subscribe(data => {
     this.lat = (data.results[0].geometry.location.lat).toString();
     this.lng = (data.results[0].geometry.location.lng).toString();
     console.log(data);
    });
  }

  ngOnInit(): void {
    if (this.searchCount > 0) {
     this.makeRequest();
    }
    this.searchCount = this.searchCount + 1;
    console.log(this.searchCount)
  }
 }
