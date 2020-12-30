export class Transaction{

    userName : String
    date : String
    tranType : String
    amount : Number

    //userId : String
    //firstNote : boolean


    constructor(userName : String, date : String, tranType : String, amount : Number)
    {
        this.userName=userName
        this.date=date
        this.amount=amount
        this.tranType=tranType
        //this.userId=userId
        //this.firstNote=firstNote
    }
}