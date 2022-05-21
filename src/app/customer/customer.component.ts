import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  selected = 'Male';
  customer : Customer = new Customer();
  submitted : boolean = false;

  constructor(private customerservice : CustomerService, private router : Router) { }

  ngOnInit(): void {
  }

  save() {
    this.customerservice.createCustomer(this.customer).subscribe(
      data => { console.log(data);
      alert('submit successful');
      this.customer = new Customer();
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
