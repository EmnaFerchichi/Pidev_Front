import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.sass']
})
export class MailingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
}
