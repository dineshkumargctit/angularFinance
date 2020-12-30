import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { ErrorMessage } from '../model/error-message.model';
import { User } from '../model/user.model';
import { CheckPasswordService } from '../service/check-password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logUser : User = new User("","");
  //isOnError : boolean = false
  //@ViewChild('err', {static: true}) errMsgComp = new ErrorMessageComponent()
  //@ViewChild(ErrorMessageComponent) errMsgComp = new  ErrorMessageComponent()
  @Output() loginUser = new EventEmitter<User>();
  @Output() errorEvent =  new EventEmitter<String>();
  errMsg : ErrorMessage = new ErrorMessage("",false);
  constructor(private ckpass : CheckPasswordService) { }

  ngOnInit(): void {
  }


  login(){
    //this.logUser.password 
    console.log(this.logUser.userName)
    //this.logUser.username=
    this.errMsg = this.ckpass.chkPasswd(this.logUser.password)
    console.log(this.errMsg)
    this.errMsg = this.ckpass.checkUserName(this.logUser.userName)
    console.log(this.errMsg)
    /*if (this.logUser.password == ""){
      console.log("before set")
      //console.log(this.errMsgComp)
      //this.errMsgComp.setErrorMsg("Please enter password for the user")
      this.errMsg.showMessage=true
      console.log("after set")
      //this.errorEvent.emit("Please enter password for the user")
      this.errMsg.errMessage = "Please enter password for the user"
      //this.errMsgComp.showErrorMsg()
      //this.err=true
      console.log("error msg")
    }*/
     
    //this.loginUser.emit(this.logUser)
  }
  hideError( ackMsg : String) {
    console.log("Acknowledged" ||ackMsg)
    this.errMsg.showMessage=false
    //this.errMsgComp.hideErrorMsg()
  }

}
