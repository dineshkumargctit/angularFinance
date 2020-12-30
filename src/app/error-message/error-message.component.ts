import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ErrorMessage } from '../model/error-message.model';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input('msg') errMsg : String = "";
  //@Input('currComp') currComp : String ="";
  @Output() errorAckEvent =  new EventEmitter<String>();
  //errMsg : ErrorMessage = new ErrorMessage("",false)
  constructor() { }

  ngOnInit(): void {
  }

  ackError (){
      console.log("ack")
      this.errorAckEvent.emit("OK")
      //this.hideErrorMsg()
  }
  /*hideErrorMsg(){
    this.errMsg.showMessage=false
  }
  showErrorMsg(){
    this.errMsg.showMessage=true
  }*/
  /*setErrorMsg(err : String ){
    this.errMsg.errMessage=err
  }*/

  /*getErrorStatus() : boolean {
    return this.errMsg.showMessage
  }*/
}
