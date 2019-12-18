import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angcommu';
  yasher = 'Yasher from app component';
  suresh = 'Suresh from app component';

  getval(str){
    alert(str);
  }

}
