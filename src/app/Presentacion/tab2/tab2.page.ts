import { Component,OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  lista: any;
  constructor(private firestoreService: FirestoreService) {}
  ngOnInit() {
     {
       this.firestoreService.getLista().subscribe(listaSnapshot => {
         this.lista = [];
         listaSnapshot.forEach((listaData: any) => {
           this.lista.push({
             id: listaData.payload.doc.id,
             data: listaData.payload.doc.data()
           });
           console.log(this.lista);
         });
       });
     }
  }
}
