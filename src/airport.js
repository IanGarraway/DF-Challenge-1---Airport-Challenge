import { Plane } from "./plane.js";

export class Airport{
    constructor() {
        this.landedAircraft = [];
            
    }

    addPlane(newplane) {
        if (newplane instanceof Plane) {
            this.landedAircraft.push(newplane);
            return "plane added";            
        } else{return "invalid plane"}
        
    }

    getCount() {
        return this.landedAircraft.length;
    }


}