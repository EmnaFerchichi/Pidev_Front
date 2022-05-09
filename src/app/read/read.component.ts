import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {
  title = 'app';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private service :ApiserviceService , private http:HttpClient) { }
  currentRate:number=3;
  readData:any;


  ngOnInit(): void {
   
    this.getAllData();

  }


  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData=res.data;
    });
  }



    


    
  }

  


