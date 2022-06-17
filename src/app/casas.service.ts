import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CasasService {
  casas: Observable<any[]>;
  micoleccion: AngularFirestoreCollection<any>

  constructor(firestore: AngularFirestore){
  this.micoleccion = firestore.collection('casas');
  this.casas = this.micoleccion.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      console.log('id', id, 'data', data);
      return { id, ...data };
    })))
  }

  altaCasa(datosCasa:any){
    this.micoleccion.add(datosCasa)
  }

  borraCasa(idCasa:any){
    this.micoleccion.doc(idCasa).delete();
  }
}
