import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Observable<Customer[]>;

  constructor(private customerservice: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.customerservice.getCustomerList()
     
  }

  deleteCustomer(customerId: number) {
    this.customerservice.deleteCustomer(customerId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCustomer(customerId: number) {
    this.router.navigate(['customer-update', customerId]);
  }

  customerDetails(customerId: number){
    this.router.navigate(['customer-details', customerId]);
  }
}
