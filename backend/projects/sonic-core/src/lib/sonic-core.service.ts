import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonicCoreService {

  constructor() { }

  echo(input){
    return input;
  }
}