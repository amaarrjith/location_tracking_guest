import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  latitude: any;
  longitude: any;
  refreshID: any;
constructor(private service:ServicesService){}
  
  ngOnInit(): void {
    
    this.getCurrentLocation()
    this.refresh()
  }

  getCurrentLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        console.log(this.latitude,this.longitude)
        const locationForm = new FormData()
        locationForm.append('latitude',this.latitude)
        locationForm.append('longitude',this.longitude)
        this.service.locationDetails(locationForm).subscribe((response:any)=>{
          
        })
      }) 
    }
    else{
      console.log('error')
    }
  }

  refresh(){
    this.refreshID = setInterval(()=>{
      this.getCurrentLocation();
    },600000);
    }
  

}
