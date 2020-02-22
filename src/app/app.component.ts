import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"];

  
  isavailable = true;//variable set as true.
  
 myClickFunction(event){

  alert("Button is clicked");
  console.log(event);
 }
  
 changemonths(event){
   alert(
     "changed month in dropdown"
   )

  console.log("changed months in the dropdown");
  console.log(event);
 }

}
