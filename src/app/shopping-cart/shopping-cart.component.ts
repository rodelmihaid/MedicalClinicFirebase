import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  CollectionReference,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  pretAnalize: number = 0;
  pretAbonamente: number = 0;
  valoareaTotala: number = 0;
  numeAbonamente: any;
  cosDocumentRef: AngularFirestoreDocument<any>;

  constructor(private firestore: AngularFirestore) {
    this.cosDocumentRef = this.firestore.collection('Cos').doc('cosDocument');
    this.cosDocumentRef.get().subscribe((doc) => {
      if (doc.exists) {
        const cosData = doc.data();
        this.pretAnalize = parseInt(cosData.sum);
        this.valoareaTotala += this.pretAnalize;
      }
    });
    this.cosDocumentRef = this.firestore
      .collection('Cos')
      .doc('cosDocumentAbonamente');
    this.cosDocumentRef.get().subscribe((doc) => {
      if (doc.exists) {
        const cosData = doc.data();
        this.numeAbonamente = cosData.nume;
        this.pretAbonamente = parseInt(cosData.Valoare);
        this.valoareaTotala += this.pretAbonamente;
      }
    });
  }

  onClickCos(): void {
    const cosCollectionRef: CollectionReference =
      this.firestore.collection('Cos').ref;
    const cosDocumentRef = cosCollectionRef.doc('cosDocument');
    cosDocumentRef
      .update({
        inCos: 1,
      })
      .then(() => {
        console.log(
          'Câmpul "inCos" a fost actualizat în documentul "cosDocument" din colecția "Cos".'
        );
      })
      .catch((error) => {
        console.error('Eroare la actualizarea câmpului "inCos":', error);
      });
  }

  ngOnInit(): void {}
}
