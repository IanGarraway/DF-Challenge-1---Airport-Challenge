import { Plane } from "./plane.js";

export class Airport{
    constructor() {
        this.landedAircraft = [];
            
    }

    addPlane(newplane) {
        if (newplane instanceof Plane) {
            if (this.landedAircraft.indexOf(newplane) === -1) {
                this.landedAircraft.push(newplane);
                return "plane added";            
            } else {
                return "plane already landed";                
            }
            
        } else { return "invalid plane"; }
        
    }

    remPlane(planeToGo) {
        if (planeToGo instanceof Plane) {
            let index = this.landedAircraft.indexOf(planeToGo);
            this.landedAircraft.splice(index, 1);
            return "plane took-off";
        } else { return "invalid plane"; }
        
    }

    getCount() {
        return this.landedAircraft.length;
    }

    listPlanes() { return this.landedAircraft; }


}