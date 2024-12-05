import { HttpClient } from '@angular/common/http';
import { PropertyRead } from '@angular/compiler';
import { Injectable, Type } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenaricServiceService<ModelType>  {

  url : string = "http://";
  endPoint : string = "";
  constructor(private http:HttpClient) { }

  setEndPoint(endPoint:string):void {
    this.endPoint = endPoint;
  }

  GetAll() : Observable<ModelType[]> {
    return this.http.get<ModelType[]>(this.url + this.endPoint);
  }
}
