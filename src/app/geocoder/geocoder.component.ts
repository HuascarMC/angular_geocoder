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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get(
  'https://maps.googleapis.com/maps/api/geocode/json?address=Edinburgh&key=AIzaSyDaWjtIBo52j7qrtJKsr7ykERqQ5MywinE').subscribe(data => {
    console.log(data);
   });
 }
