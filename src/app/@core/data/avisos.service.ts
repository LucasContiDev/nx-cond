import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;


@Injectable()
export class AvisosService {
  private aviso;
  private avisos = {
    a: { titulo: 'Dedetização', data: '04/03/2017', 
         texto: 'O condomínio terá uma dedetização geral. Para dedetizações  internas, contatar o número (12) 99999-9999' },
    b: { titulo: 'Limpeza da caixa de água', data: '10/03/2017', 
         texto: 'A caixa de água será esvaziada para que a limpeza ocorra conforme o planejado'  },
  };
  
  private avisoArray: any[];

  constructor() {
    this.avisoArray = Object.values(this.avisos);
  }

  getAvisos(): Observable<any> {
    return Observable.of(this.avisos);
  }

  getAvisoArray(): Observable<any[]> {
    return Observable.of(this.avisoArray);
  }

  getAviso(): Observable<any> {
    counter = (counter + 1) % this.avisoArray.length;
    return Observable.of(this.avisoArray[counter]);
  }
  setAviso(aviso){
    this.aviso = aviso;
  }
  setNovoAviso(form){
  }
  getUserTitulo(){
    return this.aviso.titulo;
  }
  getUserData(){
    return this.aviso.data;
  }
  getUserTexto(){
    return this.aviso.texto;
  }
}
