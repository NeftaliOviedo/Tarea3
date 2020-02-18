import { Component, OnInit,Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: "app-listado-lugares",
  templateUrl: "./listado-lugares.component.html",
  styleUrls: ["./listado-lugares.component.scss"]
})
export class ListadoLugaresComponent implements OnInit {
  @Input() lugar: any = {};

  constructor(private firestoreService: FirestoreService) {}
  public deleteLugar(documentId) {
    this.firestoreService.deleteLugarF(documentId).then(
      () => {
        console.log("Documento eliminado!");
      },
      error => {
        console.error(error);
      }
    );
  }
  ngOnInit() {}
}
