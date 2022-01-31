import { Injectable } from '@angular/core';
import { observable ,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private projectType= new BehaviorSubject("Construction");
  currentData= this.projectType.asObservable();

  constructor() { }

  setData(data:string)
  {
    
    this.projectType.next(data);

  }
}
