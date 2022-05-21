import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElectricitybillService } from '../electricitybill.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: Observable<User[]>;

  constructor(private electricitybillservice: ElectricitybillService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.electricitybillservice.getUserList()
     
  }

 
  // deleteCustomer(customerId: number) {
  //   this.customerservice.deleteCustomer(customerId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  updateUser(userId: number) {
    this.router.navigate(['update-user', userId]);
  }

  userDetails(userId: number){
    this.router.navigate(['details', userId]);
  }

}
