import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-geocoder',
  templateUrl: './geocoder.component.html',
  styleUrls: ['./geocoder.component.scss']
})

export class GeocoderComponent implements OnInit {

  address: string;
  lat: string;
  lng: string;
  api_key: string = 'AIzaSyDaWjtIBo52j7qrtJKsr7ykERqQ5MywinE';
  error: string = ''
  searchCount = 0;

  constructor(private http: HttpClient) { }

  populateInfo(info): void {
   if(info.results[0] != undefined) {
    this.lat = (info.results[0].geometry.location.lat).toString();
    this.lng = (info.results[0].geometry.location.lng).toString();
    this.error = ''
   } else {
    this.error = 'Not found'
   }
  }

  makeRequest(): void {
   this.http.get<object>(`https://maps.googleapis.com/maps/api/geocode/json?address=`
    + this.address + '&key=' + this.api_key).subscribe(data => {
      this.populateInfo(data)
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
