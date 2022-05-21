import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectricitybillService } from '../electricitybill.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId : number = 0;
  user: User = new User();

  constructor(private route: ActivatedRoute,private router: Router,
    private electricitybillservice: ElectricitybillService) { }

  ngOnInit(): void {

    this.user = new User();
    this.userId = this.route.snapshot.params['userId'];


/* 
route.snapshot - Contains the information about a route associated with a component loaded in an outlet at a particular moment in time
*/

 
    
    this.electricitybillservice.getUserId(this.userId)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));

    
   
  }

  list(){
    this.router.navigate(['users']);
  }

}
