
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = new User("","");

  @Output() addNewUser = new EventEmitter<User>();
  //@Output() loginUser = new EventEmitter<User>();
  @Output() errorEvent =  new EventEmitter<String>();

  userName : String = ""
  password : String =""

  constructor() { }

  ngOnInit(): void {
  }

  addUser (){
    //this.newUser.userName=this.userName;
    //this.newUser.password=this.password
    if ( this.password == "") {
      console.log("Incorrect password")
      this.errorEvent.emit("Please enter the passwrd for new user")
    }
    else {
      this.addNewUser.emit(this.newUser)
    }
    
    //this.loginUser.emit(this.logUser)

  }

}
