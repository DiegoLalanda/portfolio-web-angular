import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  //contactoURL = "http://localhost:8080/contacto/";
  contactoURL = "https://backendweb-dl.onrender.com/contacto/";

  constructor(private httpClient: HttpClient) { }

  public create(contacto: Contacto): Observable<any> {
    return this.httpClient.post<any>(this.contactoURL + 'create', contacto);
  }
}
