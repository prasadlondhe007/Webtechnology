import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListData } from '../Service/list-data';
@Component({
  selector: 'app-home',
  imports: [FormsModule],//FormsModule is used for two way binding (ngModel)
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //One way Binding
  name:String = "ADITI PUJARI"
  age:Number=21
  course:String="AIML"

  path:String="sunset.jpg"
  data:any[]=[]
  constructor(private studData:ListData)
  {
     this.data=studData.getData()
  }

  changeImage=()=>{
    if(this.path==="sunset.jpg")
    {
      this.path="sunrise.jpg"
    }
    else{
      this.path="sunset.jpg"
    }
  }
}
