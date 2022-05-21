import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId : number=0;
  customer : Customer = new Customer();

  constructor(private router: Router, private customerservice: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {


  this.customer = new Customer();
  this.customerId = this.route.snapshot.params['customerId'];

  this.customerservice.getCustomerId(this.customerId)
    .subscribe(data => {
      console.log(data)
      this.customer = data;
    }, error => console.log(error));

  
 
}

list(){
  this.router.navigate(['customer-list']);
}

}
