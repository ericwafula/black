import { Component, OnInit } from '@angular/core';
import { BlackalertService } from '../blackalert.service';
import { User } from '../user';

@Component({
  selector: 'app-dashbord-overview',
  templateUrl: './dashbord-overview.component.html',
  styleUrls: ['./dashbord-overview.component.css']
})
export class DashbordOverviewComponent implements OnInit {

  usersPerBlackout:any
  firstName: String

  constructor(private alertService:BlackalertService) { }  

  findBlackout(blackoutId:number){

    this.alertService.getBlackouts(blackoutId).subscribe(data => {this.usersPerBlackout = data
      console.log(data)})

  }
  
  createNewUser(testUser: User){
    this.firstName = testUser.fname
    console.log(this.firstName)
    testUser = new User("a", "b", "c", "d", "e")
    console.log(testUser)
    this.alertService.addUser(testUser)
  }

  ngOnInit(): void {
  }

}
