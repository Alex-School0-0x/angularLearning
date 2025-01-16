import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericGetServiceService<ModelType> {

  url : string = "https://localhost:7292/api/";
  protected endPoint : string = "";
  constructor(protected http:HttpClient) { }

  setEndPoint(endPoint:string):void {
    this.endPoint = endPoint;
  }

  getAll() : Observable<ModelType[]> {
    return this.http.get<ModelType[]>(this.url + this.endPoint);
  }

  getById(id:number) : Observable<ModelType> {
    return this.http.get<ModelType>(this.url + this.endPoint + "/" + id);
  }
}
