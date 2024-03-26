import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abonamente',
  templateUrl: './abonamente.component.html',
  styleUrls: ['./abonamente.component.css'],
})
export class AbonamenteComponent implements OnInit {
  abonamenteCollection: AngularFirestoreCollection<any>;

  abonamente: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {}
  gen: string = 'Adulti';

  changeGen() {
    if (this.gen === 'Adulti') {
      this.gen = 'Copii';
    } else {
      this.gen = 'Adulti';
    }
  }
  onClickCos(abonament: any, gen: any): void {
    const cosCollectionRef: CollectionReference =
      this.firestore.collection('Cos').ref;
    const cosDocumentRef = cosCollectionRef.doc('cosDocumentAbonamente');
    const nume = abonament.numePachet;

    if (gen === 'Adulti') {
      var pret = abonament.pret;
    } else {
      pret = abonament.pret * 1.2;
    }

    cosDocumentRef
      .set(
        {
          inCos: 1,
          Valoare: parseInt(pret) + 1,
          nume: nume,
        },
        { merge: true }
      )
      .then(() => {
        console.log(
          'Câmpurile au fost actualizate în documentul "cosDocumentAbonamente" din colecția "Cos".'
        );
      })
      .catch((error) => {
        console.error(
          'Eroare la actualizarea câmpurilor în documentul "cosDocumentAbonamente" din colecția "Cos":',
          error
        );
      });
  }

  ngOnInit(): void {
    this.abonamenteCollection = this.firestore.collection('Abonamente');
    this.abonamente = this.abonamenteCollection.valueChanges();
  }
}
