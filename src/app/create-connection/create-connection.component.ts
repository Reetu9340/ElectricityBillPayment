import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Connection } from '../connection';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-create-connection',
  templateUrl: './create-connection.component.html',
  styleUrls: ['./create-connection.component.css']
})
export class CreateConnectionComponent implements OnInit {

  selected = 'NON_INDUSTRIAL';
  selected1 = 'inactive';
  title = 'Template Driven Form';
  connection : Connection = new Connection();
  submitted : boolean = false;

 

  constructor(private connectionservice : ConnectionService, private router : Router) { }
  

  ngOnInit(): void {
  }

  newConnection(): void {
    this.submitted = false;
    this.connection = new Connection();
  }
save() {
this.connectionservice.createConnection(this.connection).subscribe(
  data => { 
  console.log(data);
  alert('submit successful');
  this.connection = new Connection();
  this.gotoList();

},
error => 
{
  console.log(error);
  alert('something went wrong');
}
);

}
onSubmit() {
this.submitted = true;
this.save();
}
gotoList() {
this.router.navigate(['/login']);

}

}
