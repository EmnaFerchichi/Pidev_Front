import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {
   }

   //connect frontend to backend
   apiUrl2='http://localhost:3000/course';
   



   //get all data course

   getAllData(): Observable<any>
   {
     return this._http.get(`${this.apiUrl2}`);

   }



   
   //create data course
   createData(data:any):Observable<any>{
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl2}`, data);
  }

   
   
   
//delete data course
 deleteData(id:any): Observable<any>
{
  let ids=id;
  return this._http.delete(`${this.apiUrl2}/${ids}`);

}


  

    //update data course
    updateData(data:any,id:any):Observable<any>{
      let ids=id;
      return this._http.put(`${this.apiUrl2}/${ids}`,data);
    }

    //getsingledata course
  getSingleData(id:any):Observable<any>
  {
    let ids=id;
    return this._http.get(`${this.apiUrl2}/${ids}`);
  }
  
}
