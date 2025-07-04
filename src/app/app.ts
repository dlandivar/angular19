import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista }from './lista/lista';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ BrowserModule,
    FormsModule,Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 
}



