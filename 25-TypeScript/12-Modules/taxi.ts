import { Vehicle } from './vehicle' ;
import { Point } from './point';

export class Taxi implements Vehicle { // taxi.ts vehicle ihtiyaç duyuyor
    constructor(private _location: Point, private _color?: string) { // taxi.ts point'e ihtiyaç duyuyor
    }
  
    travelTo(point: Point): void {
      console.log(`taksi x: ${this._location.x} y: ${this._location.y} dan x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if(value.x<0 || value.y){
            throw new Error("Kordinat bilgileri negatif olamaz");  // hata fırlat 
        }
        this._location=value;
    }
  }