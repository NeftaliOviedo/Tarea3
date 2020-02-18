import { Component, OnInit } from '@angular/core';
import { Lugar, descLugar } from '../lugares';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  lista: descLugar[] = [];
  nombre: string;
  imagen: string;
  ubicacion: string;
  lugar;
  constructor(private firestoreService: FirestoreService) {
 
  }

  newLugar() {
    this.lugar = new Lugar(this.nombre, this.ubicacion, this.imagen);
    this.lugar.createLugar();
    this.lista = this.lugar.getLugaresListado();
    this.firestoreService.createLugarF(this.lugar.getLugar()).then(
      () => {
        console.log("Documento creado exitósamente!");
      },
      error => {
        console.error(error);
      }
    );;
  }
  
  ngOnInit() {}
}
