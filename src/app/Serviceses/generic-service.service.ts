import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenericServiceService<ModelType>  {

  url : string = "http://localhost:7292/api";
  private endPointURL : string = "";
  constructor(private http:HttpClient) { }

  setEndPoint(endPoint:string):void {
    this.endPointURL = `${this.url}/${endPoint}`;
  }

  getAll() : Observable<ModelType[]> {
    return this.http.get<ModelType[]>(this.endPointURL);
  }

  getById(id : number) : Observable<ModelType> {
    return this.http.get<ModelType>(`${this.endPointURL}/${id}`);
  }

  post(model : ModelType) : Observable<ModelType> {
    return this.http.post<ModelType>(this.endPointURL,  model)
  }

  put(model : ModelType) : Observable<ModelType> {
    return this.http.put<ModelType>(this.endPointURL, model)
  }

  delete(id : number) : Observable<ModelType> {
    return this.http.delete<ModelType>(`${this.endPointURL}/${id}`);
  }
}
