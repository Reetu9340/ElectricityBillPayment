import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectricitybillService } from '../electricitybill.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  selected = 'Male';
  userId : number =0;
  user : User =new User();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private userservice : ElectricitybillService) { }

  ngOnInit(): void {
    this.user = new User();
    this.userId = this.route.snapshot.params['userId'];
    this.userservice.getUserId(this.userId).subscribe(
      data => {
    console.log(data)
    this.user = data;
      },
    error => console.log(error));
     }

     updateUser() {
       this.userservice.updateUser(this.userId, this.user).subscribe(
         data => {
          console.log(data);
          alert('updated successful');
          this.user = new User();
          this.gotoList();
         },
         error => console.log(error));
         alert('something went wrong');
        }

        onSubmit() {
          this.submitted = true;
          this.updateUser();
        }

        gotoList() {
          this.router.navigate(['users']);
        }

}
