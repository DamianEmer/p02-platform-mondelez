import { Injectable } from '@angular/core';
import { arrayMax } from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  calcIdealProduction(speed:number, proTime:number, weight: number): number{
    return (speed * proTime)/weight;
  }

  calculateTLD (weight: number, volume: number, speed: number):number{
    return (weight * volume)/speed;
  }

  calcLossSpeed(proTime, tld: number, unplannedStoppages: number = 0): number{
    return (proTime - tld) - unplannedStoppages;
  }

  calcOEE_Sku(tld: number, prodTime: number):number{
    return (tld/prodTime)*100;
  }

  calcGE_Sku(tld: number, turn: number, plannedStoppages):number{
    return (tld/(turn - plannedStoppages))*100;
  }

  convertionSpeed(speed: number){
    return speed / 60;
  }
}
