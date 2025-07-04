import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
 tarea: string = '';

  @Output() textoAgregado = new EventEmitter<string>();
  emitirTexto() {
    const limpio = this.tarea.trim();
    if (limpio) {
      this.textoAgregado.emit(limpio);
      this.tarea = '';
    }
  }
}
