import { Component } from '@angular/core';
import { Lista }from './lista/lista';


import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 
}



