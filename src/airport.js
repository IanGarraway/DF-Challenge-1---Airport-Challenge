import { Plane } from "./plane.js";

export class Airport{
    constructor() {
        this.landedAircraft = [];
        this.maxCap = 10;
        this.weather = "Sunny";
        this.stormy = false;
            
    }
    
    land(newplane) {

        if (!(newplane instanceof Plane)) { return "invalid plane"; }
        if (this.stormy == true) { return "stormy weather warning"; }
        if (this.landedAircraft.indexOf(newplane) !== -1) { return "plane already landed"; }
        if (this.getCount() >= this.maxCap) { return "max capacity reached"; } 

        this.landedAircraft.push(newplane);
        return "plane added"; 


        /*
        is this too many nested if statments? i decided it was
        if (newplane instanceof Plane) {
            if (this.landedAircraft.indexOf(newplane) === -1) {
                if (this.getCount() < this.maxCap) {
                    this.landedAircraft.push(newplane);
                    return "plane added";                                
                } else { return "max capacity reached"; }                
            } else { return "plane already landed"; }            
        } else { return "invalid plane"; }        
        */
    }

    takeOff(planeToGo) {
        if (!(planeToGo instanceof Plane)) { return "invalid plane"; }        
        let index = this.landedAircraft.indexOf(planeToGo);
        if (index === -1) { return "plane not landed"; }

        this.landedAircraft.splice(index, 1);
        return "plane took-off";  

        /*if (planeToGo instanceof Plane) {
            let i = this.landedAircraft.indexOf(planeToGo);
            if (i != -1) {
                let index = this.landedAircraft.indexOf(planeToGo);
                this.landedAircraft.splice(index, 1);
                return "plane took-off";                
            } else{return "plane not landed"}
            
        } else { return "invalid plane"; } */
        
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

    getWeather() {
        return this.weather;
    }

    setWeather(weather) {
        if (weather == null || weather == "") { return "invalid weather"; }
        this.weather = weather;
        this.stormy = (weather === "Stormy");
        return "weather set";
    }

    getStormy() { return this.stormy; }

    




}