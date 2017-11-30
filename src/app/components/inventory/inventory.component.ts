import { Component, OnInit } from '@angular/core';
import { InventaryService } from '../../services/inventary/inventary.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  name: string = '';
  filter: string;
  action: string = "default";
  isLoading: boolean = false;

  item: {};

items: Array<any>;



  constructor(private inventaryService: InventaryService) { }

  ngOnInit() {

    this.onFind();

  }

  onCreate(){
    this.item = { id:"", name: "", brand: "", provider: "", quantity: "", price:""};
    this.action = "create";
  }

  onEdit(item){
  this.item = item;
  this.action = "edit";
  }

  onFind(){
    this.isLoading= true;
    this.inventaryService.find().subscribe((res:any) => {
      this.items = res.body;
      this.isLoading= false;
      console.log(res);
   });
  }

  onSave(user){
    if (this.action == "edit"){
      this.inventaryService.updateOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
    if (this.action == "create"){
      this.inventaryService.insertOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
  }

  onDelete(id){
    this.inventaryService.deleteOne(id).subscribe((res:any) => {
      this.onFind();
    });
  }

}
