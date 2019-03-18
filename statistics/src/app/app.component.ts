import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
// @Component({
//   selector: 'select-value-binding-example',
//   templateUrl: 'select-value-binding-example.html',
//   styleUrls: ['select-value-binding-example.css'],
// })
// export class SelectValueBindingExample {
//   selected = 'option2';
// }
