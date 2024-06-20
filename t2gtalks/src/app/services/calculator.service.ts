import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger:LoggerService) { }

  add(n1:number, n2:number){
    this.logger.log("Addition method called")
    return n1 + n2
  }

  subtract(n1: number, n2:number){
    this.logger.log("Subtraction method called")
    return n1 - n2
  }

}
