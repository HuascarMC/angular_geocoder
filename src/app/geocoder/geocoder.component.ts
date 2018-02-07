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
  api_key: string = 'AIzaSyDaWjtIBo52j7qrtJKsr7ykERqQ5MywinE'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get(
  'https://maps.googleapis.com/maps/api/geocode/json?address='
   + this.address + '&key=' + this.api_key).subscribe(data => {
    this.lat = data.results[0].geometry.location.lat;
    this.lng = data.results[0].geometry.location.lng;
    console.log(data);
   });
 }
