import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectricityBill} from '../electricitybill';
import { ElectricitybillService } from '../electricitybill.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selected = 'CUSTOMER';
  user : ElectricityBill = new ElectricityBill();
submitted : boolean = false;

  constructor(private electricitybillservice : ElectricitybillService, private router : Router) { }

  ngOnInit(): void {
  }
 loginUser() {
   this.electricitybillservice.loginUser(this.user).subscribe (
     data =>{
     console.log("response recevied");
     alert('Login successful');
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
  
}
gotoList() {
  this.router.navigate(['/customer-navbar']);
  
}

 
}
