import { Component, OnInit } from '@angular/core';
import { Lugar, descLugar } from '../lugares';
import { EnviarLugarService } from '../../service/enviar-lugar.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  lista: descLugar[] = [];
  nombre: string;
  imagen: string;
  ubicacion: string;
  lugar;
  constructor(private enviarService: EnviarLugarService) {
  }
  
  newLugar() {
    this.lugar =   new Lugar(this.nombre, this.ubicacion, this.imagen);
    this.lugar.createLugar();
    this.lista = this.lugar.getLugaresListado();
    this.enviarService.sendObjectSource(this.lista);
  }

  ngOnInit() {}

}
