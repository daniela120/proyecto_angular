import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class CruduserService {
  API: string='http://localhost:81/user/';

  constructor(private clienteHttp:HttpClient) { }

  AgregarUser(datosUser:User):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosUser);
  }

  ObtenerUsers(){
    return this.clienteHttp.get(this.API);

  }

  BorrarUser(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  ObtenerUser(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);

  }

  EditarUser(id:any,datosUser:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosUser);
  }
}
