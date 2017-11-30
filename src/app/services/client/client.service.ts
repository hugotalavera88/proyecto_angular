import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {


  constructor(private http:HttpClient) { }

  find(){
    return this.http.get('http://localhost:3000/api/clients');
  }

  insertOne(obj){
    return this.http.post('http://localhost:3000/api/clients', obj);
  }

  updateOne(obj){
    return this.http.put('http://localhost:3000/api/clients', obj);
  }

  deleteOne(id){
    return this.http.delete('http://localhost:3000/api/clients/' + id);
  }

}
