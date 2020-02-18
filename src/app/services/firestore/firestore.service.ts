import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { descLugar } from '../../logic/lugares';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  public createLugarF(data: descLugar) {
    return this.firestore.collection('lugares').add(data);
  }
  public getLugar(documentId: string) {
    return this.firestore.collection('lugares').doc(documentId).snapshotChanges();
  }
  public getLista() {
    return this.firestore.collection("lugares").snapshotChanges();
  }
  public deleteLugarF(documentId: string ) {
    return this.firestore.collection('lugares').doc(documentId).delete();
  }
}