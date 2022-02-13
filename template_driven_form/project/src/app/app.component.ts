import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  sub = ["Angular" , "React" , "Vue"];

  onSubmit(data:NgForm){
    console.log(data.value);
  }

  resetmyFrom(data:NgForm){
   data.resetForm({bydefault:'Please select an option', email:'typesomething'});

  }
}
