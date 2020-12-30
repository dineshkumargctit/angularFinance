export class TranType{

    tranType : String
    tranDesc : String
    junkTran : boolean
    direction : String

    //userId : String
    //firstNote : boolean


    constructor(tranType : String, tranDesc : String, direction : String, junkTran : boolean,)
    {
        this.tranType=tranType
        this.tranDesc=tranDesc
        this.junkTran=junkTran
        this.direction=direction
        //this.userId=userId
        //this.firstNote=firstNote
    }
}