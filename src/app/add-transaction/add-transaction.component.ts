import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  @Output() addTranEvent = new EventEmitter<Transaction>();
  @Output() errorEvent =  new EventEmitter<String>();
  
  tran : Transaction = new Transaction("","","",0);
  constructor() { }

  ngOnInit(): void {
  }

  addTransaction1(){
    console.log("Emitted Add Traansactin Event")
    this.addTranEvent.emit(this.tran);
    console.log("After Emitted Add Traansactin Event")
  }
}


