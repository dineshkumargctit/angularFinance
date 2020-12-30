import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';
import {TranType} from '../model/tran-type.model'


@Component({
  selector: 'app-add-tran-type',
  templateUrl: './add-tran-type.component.html',
  styleUrls: ['./add-tran-type.component.css']
})
export class AddTranTypeComponent implements OnInit {

  newTranType : TranType = new TranType("","","",false)
  @Output() addNewTranType = new EventEmitter<TranType>();
  @Output() errorEvent =  new EventEmitter<String>();

  @Input('direction') direct : String =""
  @Input('junkTran') junkflag : String=""
  //@Input('expense') exp : String =""


  constructor() { }

  ngOnInit(): void {
  }

  addTranType(){
    
    this.newTranType.direction=this.direct
    if (this.junkflag=="Yes")
      this.newTranType.junkTran=true
    else
      this.newTranType.junkTran=false
    console.log(this.newTranType)
    this.addNewTranType.emit(this.newTranType);
  }


}
