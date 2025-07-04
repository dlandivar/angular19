import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista }from './lista/lista';
import { Item } from './item/item';


@Component({
  selector: 'app-root',
  imports: [Lista,Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 
}



