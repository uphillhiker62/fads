import { UserProfileService } from './user-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user : any;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // this.userProfileService.getUsers().subscribe( res => {
    //   this.user = res;
    //   console.log(this.user);
    return this.user = {
      address: "8 Mayfield Hill",
      city: "Long Beach",
      first_name: "Theresa",
      last_name: "Fiddy",
      state: "California",
      zipcode: "90831"
    }
  }
    saveInfo(){
      console.log(this.user);
    }
}
