import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectricityBill } from '../electricitybill';
import { ElectricitybillService } from '../electricitybill.service';

@Component({
  selector: 'app-create-electricity-bill',
  templateUrl: './create-electricity-bill.component.html',
  styleUrls: ['./create-electricity-bill.component.css']
})
export class CreateElectricityBillComponent implements OnInit {
  selected = 'CUSTOMER';
  title = 'Template Driven Form';

user : ElectricityBill = new ElectricityBill();
submitted : boolean = false;

  constructor(private electricitybillservice : ElectricitybillService, private router : Router) { }
  


  ngOnInit(): void {
      }

      newUser(): void {
        this.submitted = false;
        this.user = new ElectricityBill();
      }
  save() {
    this.electricitybillservice.createUser(this.user).subscribe(
      data => { 
      console.log(data);
      alert('submit successful');
      this.user = new ElectricityBill();
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
