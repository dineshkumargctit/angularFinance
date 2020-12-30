import { Injectable } from '@angular/core';
import { ErrorMessage } from '../model/error-message.model';

@Injectable({
  providedIn: 'root'
})
export class CheckPasswordService {

  ret : ErrorMessage = new ErrorMessage("",false)
  constructor() { }

  chkPasswd( psswd : String) : ErrorMessage {
    if (psswd == "")
    {
      this.ret.showMessage=true
      this.ret.errMessage="Password is null"
      return this.ret
    }
    else{
      return this.ret
    }
  }
    checkUserName(usr : String) : ErrorMessage {
      if (usr == ""){
        this.ret.showMessage=true
        this.ret.errMessage="User name is null"
        return this.ret
      }
      else{
        return this.ret
      }
    }
}
