import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SalesService {

  sale: any = {
  client: {name: "", lastName: "", email: ""},
  address: {street:"", city: "", zip: ""},
  items: [],
};

/*sales: any = [
  {
    order: 223344,
    date:new Date(),
    total: 44553,
    client: {name: "Victor Hugo", lastName: "Aguilar Parra", email: "victor@email.com"},
    address: {street:"San pancho 3432", city: "Chihuahua", zip: "446744"},
    items: [
      {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
      {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:3, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"}
    ],
  },
  {
    order: 776655,
    date:new Date(),
    total: 345,
    client: {name: "Juan Manuel ", lastName: "Medrano", email: "Juan@email.com"},
    address: {street:"San pancho 3432", city: "Chihuahua", zip: "446744"},
    items: [
      {id:1, name: "Aceite", brand: "Cada Dia", provider: "AGD", quantity: "10", price: "50"},
      {id:2, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:3, name: "Arroz", brand: "Molinos", provider: "Adeco", quantity: "100", price: "20"},
      {id:4, name: "Azucar", brand: "Chango", provider: "Adeco", quantity: "20", price: "25"}
    ],
  }
*/

constructor (private http:HttpClient) { }
  find(){return this.http.get('http://localhost:3000/api/sales', );}
  insertOne(obj){return this.http.post('http://localhost:3000/api/sales', obj);}
  //OnDeleteind(obj){return this.http.delete('/api/sales', obj);}
  deleteOne(id){return this.http.delete('http://localhost:3000/api/sales/' + id);}
  findbyname(search){return this.http.get('http://localhost:3000/api/client/' + search)};


}
