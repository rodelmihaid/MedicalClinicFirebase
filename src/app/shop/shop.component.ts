import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  CollectionReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  abonamenteCollection: AngularFirestoreCollection<any>;
  contor: any = 0;
  sum: number = 0;
  listaAbonamente: string[] = [];
  errorMessage: string = '';

  abonamente: Observable<any[]>;
  cos: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  onClick(abonament: any) {
    if (!this.listaAbonamente.includes(abonament.nume)) {
      this.contor++;
      this.sum += parseFloat(abonament.pret);
      this.listaAbonamente.push(abonament.nume);
      this.errorMessage = '';
      // Adăugarea valorilor în colecția "Cos"
      // Adăugarea valorilor într-un singur document în colecția "Cos"
      const cosCollectionRef: CollectionReference =
        this.firestore.collection('Cos').ref;
      const cosDocumentRef = cosCollectionRef.doc('cosDocument');

      cosDocumentRef
        .update({
          sum: this.sum,
          abonamente: this.listaAbonamente,
        })
        .then(() => {
          console.log(
            'Valorile au fost adăugate în documentul "cosDocument" din colecția "Cos".'
          );
        })
        .catch((error) => {
          console.error(
            'Eroare la adăugarea valorilor în documentul "cosDocument" din colecția "Cos":',
            error
          );
        });
    } else {
      this.errorMessage = 'Nu poți să-l adaugi de mai multe ori în coș';
    }
  }
  onClickRemove(abonament: string) {
    const index = this.listaAbonamente.indexOf(abonament);
    const cosCollectionRef: CollectionReference =
      this.firestore.collection('Cos').ref;
    const cosDocumentRef = cosCollectionRef.doc('cosDocument');
    if (index > -1) {
      this.listaAbonamente.splice(index, 1);

      this.abonamente.subscribe((abonamenteArray) => {
        for (let i = 0; i < abonamenteArray.length; i++) {
          if (abonamenteArray[i].nume === abonament) {
            const pret = parseFloat(abonamenteArray[i].pret);
            this.sum -= pret;

            cosDocumentRef
              .update({
                sum: this.sum,
                abonamente: this.listaAbonamente,
              })
              .then(() => {
                console.log(
                  'Valorile au fost adăugate în documentul "cosDocument" din colecția "Cos".'
                );
              })
              .catch((error) => {
                console.error(
                  'Eroare la adăugarea valorilor în documentul "cosDocument" din colecția "Cos":',
                  error
                );
              });
            break;
          }
        }
      });
    }
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

  ngOnInit(): void {
    this.abonamenteCollection = this.firestore.collection('Shop');
    this.abonamente = this.abonamenteCollection.valueChanges();
    this.abonamenteCollection = this.firestore.collection('Cos');
    this.cos = this.abonamenteCollection.valueChanges();
    this.cos.subscribe((cosData) => {
      if (cosData.length > 0) {
        const cosDocumentData = cosData[0];
        this.listaAbonamente = cosDocumentData.abonamente;
        this.sum = cosDocumentData.sum;
        this.contor = this.listaAbonamente.length;
      }
    });
    const cosDocumentRef = this.abonamenteCollection.doc('cosDocument');
    cosDocumentRef.update({
      inCos: 0,
    });
  }
}
