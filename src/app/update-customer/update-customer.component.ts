import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  selected = 'Male';
  customerId : number =0;
  customer : Customer =new Customer();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private customerservice: CustomerService) { }

  ngOnInit(): void {
    this.customer = new Customer();
    this.customerId = this.route.snapshot.params['customerId'];
    this.customerservice.getCustomerId(this.customerId).subscribe(
      data => {
    console.log(data)
    this.customer = data;
      },
    error => console.log(error));
     }

     updateCustomer() {
       this.customerservice.updateCustomer(this.customerId, this.customer).subscribe(
         data => {
          console.log(data);
          alert('updated successful');
          this.customer = new Customer();
          this.gotoList();
         },
         error => console.log(error));
         alert('something went wrong');
        }

        onSubmit() {
          this.submitted = true;
          this.updateCustomer();
        }

        gotoList() {
          this.router.navigate(['customer-details']);
        }
     }