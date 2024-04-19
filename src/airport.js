import { Plane } from "./plane.js";

export class Airport{
    constructor() {
        this.landedAircraft = [];
        this.maxCap = 10;
            
    }
    //is this too many nested if statments?
    addPlane(newplane) {
        if (newplane instanceof Plane) {
            if (this.landedAircraft.indexOf(newplane) === -1) {
                if (this.getCount() < this.maxCap) {
                    this.landedAircraft.push(newplane);
                    return "plane added";                                
                } else { return "max capacity reached"; }                
            } else { return "plane already landed"; }            
        } else { return "invalid plane"; }        
    }

    remPlane(planeToGo) {
        if (planeToGo instanceof Plane) {
            let i = this.landedAircraft.indexOf(planeToGo);
            if (i != -1) {
                let index = this.landedAircraft.indexOf(planeToGo);
                this.landedAircraft.splice(index, 1);
                return "plane took-off";                
            } else{return "plane not landed"}
            
        } else { return "invalid plane"; }
        
    }

    listPlanes() { return this.landedAircraft; }

    getCount() { return this.landedAircraft.length; }

    getMaxCap() { return this.maxCap; }

    changeCap(newCap) {
        if (Number.isInteger(newCap) && newCap>0) {
            this.maxCap = newCap;
            return "cap changed";            
        } else { return "invalid number"; }
        
    }

    




}