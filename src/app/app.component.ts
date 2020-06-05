import { Component } from '@angular/core';
import {MyApiService} from './my-api.service';
import { GlobalError } from './global-error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullandFinal';
  

  constructor(private myservice:MyApiService){

   
   this.myservice.fetchdata().subscribe((data)=>console.log(data),(error:GlobalError)=>console.log(error.errormessage))
  

  }

 


  
}
