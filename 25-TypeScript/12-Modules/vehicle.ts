import { Point } from "./point";
// burada vehicle.ts point'e ihtiyaç duyuyor.
export interface Vehicle {
    travelTo(point: Point): void;
  }