import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Connection } from '../connection';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.css']
})
export class ConnectionListComponent implements OnInit {

  connections!: Observable<Connection[]>;

  constructor(private connectionservice : ConnectionService, private route : Router) { }

  ngOnInit(): void {
    this.reloadData();
    
  }


  
  reloadData() {
    this.connections = this.connectionservice.getConnectionList()
     console.log(this.connections);
  }

  // deleteCustomer(customerId: number) {
  //   this.connectionservice.deleteCustomer(customerId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // updateCustomer(customerId: number) {
  //   this.router.navigate(['customer-update', customerId]);
  // }

  // customerDetails(customerId: number){
  //   this.router.navigate(['customer-details', customerId]);
  // }

}
