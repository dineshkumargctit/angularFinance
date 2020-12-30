import { Component, Input, OnInit } from '@angular/core';
import { ErrorMessage } from '../model/error-message.model';
import { TranType } from '../model/tran-type.model';
import { Transaction } from '../model/transaction.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  routes  = [
    {url : "home", linkname : "Home"},
    {url : "login", linkname : "Login"},
    {url : "newUser", linkname : "Register"},
    {url : "newTranType", linkname : "Add Tran Type"},
    {url : "newTran", linkname : "Add Transaction"}
  ]

  userList : User[]=[];
  tranTypeList : TranType[]=[];
  tranList : Transaction[] = [];

  //errorMsg :  String = ""
  //currComp : String = "home"
  errMsg : ErrorMessage = new ErrorMessage("",false);
  @Input('') currUser  = new User("Dinesh","Password");
   //x : String="Default";

  constructor() { 
  }

  ngOnInit(): void {
    //this.currUser = new User("Dinesh","Password")
    this.userList.push(this.currUser)
    console.log(this.errMsg)
  }


  getPassword(user : String) : String {
    for (var i = 0; i < this.userList.length; i++) {
      if (user == this.userList[i].userName)
        console.log(this.userList[i].password) 
        return this.userList[i].password
    }
    return ""
  }
  LoginToUser(logUser : User){
    console.log("loggedin to " || logUser.userName)
    //console.log("logUser")
    if (logUser.password == this.getPassword(logUser.userName))
      this.currUser.userName=logUser.userName
    else
    {
      this.errMsg.showMessage=true
      this.errMsg.errMessage="Incorrect Password"
      console.log("Incorrect password")
      console.log(this.errMsg)
    }
      
  }
  AddNewUser(addUser : User){
    console.log(this.userList)
    console.log("Adding new user " || addUser.userName)
    this.userList.push(addUser)
    console.log(this.userList)
  }
  addNewTran(newTranType : TranType) {
    console.log('In home compoent')
    console.log(newTranType)
    this.tranTypeList.push(newTranType)
  }

  addTransaction1(newTransaction : Transaction){
    console.log("In Home compoent")
    console.log(newTransaction)
    this.tranList.push(newTransaction)
  }
  /*ChangeUser(chngUser : User) {
    this.currUser.userName=chngUser.userName
  }*/

  /*ShowErr ( errMsg : String) {
    console.log("Captured error")
    this.errorMsg = errMsg
  }*/

  hideError( ackMsg : String) {
    console.log("Acknowledged" ||ackMsg)
    this.errMsg.showMessage=false
  }

}
