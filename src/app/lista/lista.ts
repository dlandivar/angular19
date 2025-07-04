import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from '../item/item';


interface task {
  name: string;
  id: string;
}

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule,Item],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})

export class Lista {
  //tarea:string='';
  tareas: task[] = [];

  agregar(nuevo: string) {

    this.tareas.push({ id: crypto.randomUUID(), name: nuevo });
    //nuevo='';
  }

borrar(id: string) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

}



