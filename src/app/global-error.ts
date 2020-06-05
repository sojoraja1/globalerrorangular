export class GlobalError {
    constructor(public errorofanytype?:any){

    }

   
   public get errormessage() :any{
       return this.errorofanytype;
   }
   




    
}
