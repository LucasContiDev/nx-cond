import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;


@Injectable()
export class LazerService {
  private lazer;
  private tipo_lazer = {
    churrasqueira: { desc: 'Churrasqueira'},
    salao_1: { desc: 'Salão de Festas A'},
    salao_2: { desc: 'Salão de Festas B'},
  };
  
  private lazerArray: any[];

  constructor() {
    this.lazerArray = Object.values(this.tipo_lazer);
  }

  getTipoLazer(): Observable<any> {
    return Observable.of(this.tipo_lazer);
  }

  getLazerArray(): Observable<any[]> {
    return Observable.of(this.lazerArray);
  }

  getLazer(): Observable<any> {
    counter = (counter + 1) % this.lazerArray.length;
    return Observable.of(this.lazerArray[counter]);
  }
  setLazer(lazer){
    this.lazer = lazer;
  }
  setNovoLazer(form){
  }
  getLazerDesc(){
    return this.lazer.desc;
  }
}
