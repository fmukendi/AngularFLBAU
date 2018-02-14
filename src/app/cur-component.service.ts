import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CurComponentService {

  bSubject = new BehaviorSubject('Home');

  constructor() {
  }

  updateCurrentComponent(componentName: string) {
    this.bSubject.next(componentName);
  }

  getComponentObs(): BehaviorSubject<string> {
    return this.bSubject;
  }



}
