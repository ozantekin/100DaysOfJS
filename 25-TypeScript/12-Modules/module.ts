import {Taxi} from './taxi' ;
import {Bus} from './bus';
  
  let taxi_1: Taxi = new Taxi({ x: 3, y: 5 });  // module.ts taxi ihitiyaç duyuyor
  taxi_1.travelTo({ x: 1, y: 2 }); 

  let currentLocation = taxi_1.location; 
  taxi_1.location = {x: 2, y: 5};

