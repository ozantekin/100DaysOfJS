import { Vehicle } from "./vehicle";
import { Point } from "./point";

export class Bus implements Vehicle {
    travelTo(point: Point): void {
        throw new Error("Method not implemented.");
    }
    
}