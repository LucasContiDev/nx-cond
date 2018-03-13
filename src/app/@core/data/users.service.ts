import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;


@Injectable()
export class UserService {
  private user;

  private users = {
    lucas: { name: 'Lucas Conti', picture: 'assets/images/lucas.png', reclama: 'Barulho no 414' },
    nick: { name: 'João Silva', picture: 'assets/images/nick.png', reclama: 'Vazamento de água'  },
    eva: { name: 'Ana Mara', picture: 'assets/images/eva.png', reclama: 'Necessidade de dedetização'  },
    jack: { name: 'Carlos Monteiro', picture: 'assets/images/jack.png', reclama: 'Hall está com goteiras'  },
    lee: { name: 'Cristina Wong', picture: 'assets/images/lee.png', reclama: 'Piscina está Suja'  },
    alan: { name: 'Marcos de Cássio', picture: 'assets/images/alan.png', reclama: 'Quadra poliesportiva sem rede'  },
    kate: { name: 'Catarina Machado', picture: 'assets/images/kate.png', reclama: 'Churrasqueira sem grelha!!'  },
  };
  
  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
  setUser(c){
    this.user = c;
  }
  getUserName(){
    return this.user.name;
  }
  getUserReclama(){
    return this.user.reclama;
  }
}
