import { Component } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }



  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }








//contador
  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }
}
