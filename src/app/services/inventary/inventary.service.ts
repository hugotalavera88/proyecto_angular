import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventaryService {

  products: Array<any> = [
    {name: "Aceite", brand: "Cada Dia", suply: "AGD", qty: "10", price: "50"},
  ];

  constructor(private http:HttpClient) {
  }
  find(){
  return this.http.get('http://localhost:3000/api/products');
}

insertOne(obj){
  return this.http.post('http://localhost:3000/api/products', obj);
}

updateOne(obj){
  return this.http.put('http://localhost:3000/api/products', obj);
}

deleteOne(id){
  return this.http.delete('http://localhost:3000/api/products/' + id);
}

}
