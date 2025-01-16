import { Injectable } from '@angular/core';
import { GenericGetServiceService } from './generic-get-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericFullServiceService<ModelType> extends GenericGetServiceService<ModelType> {

  delete(id:number) : Observable<ModelType> {
    return this.http.delete<ModelType>(this.url + this.endPoint + "/" + id);
  }

  put(model:ModelType) : Observable<ModelType> {
    return this.http.put<ModelType>(this.url + this.endPoint, model);
  }

  post(model:ModelType) : Observable<ModelType> {
    return this.http.post<ModelType>(this.url + this.endPoint, model);
  }
}
