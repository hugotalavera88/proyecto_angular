import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { InventaryService } from '../../services/inventary/inventary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<any> ;
  user: {name: "", lastName: "", email: ""};
  action: string = "default";

  onCreate(){
    this.user = {name: "", lastName: "", email: ""};
    this.action = "create";
  }

  onEdit(user){
  this.user = user;
  this.action = "edit";
  }


  constructor(private clientService: ClientService) {  }

  ngOnInit() {

  this.onFind();

  }

  onFind(){
    this.clientService.find().subscribe((res:any) => {
      this.users = res.body;

   });
  }

  onSave(user){
    if (this.action == "edit"){
      this.clientService.updateOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
    if (this.action == "create"){
      this.clientService.insertOne(user).subscribe((res:any) => {
        this.onFind();
      });
    }
  }

  onDelete(id){
    this.clientService.deleteOne(id).subscribe((res:any) => {
      this.onFind();
    });
  }

}
