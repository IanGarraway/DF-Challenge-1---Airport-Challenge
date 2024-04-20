import { Plane } from "./plane.js";

export class Airport{
    constructor() {
        this.landedAircraft = [];
        this.maxCap = 10;
        this.weather = "Sunny";
        this.stormy = false;
            
    }
    
    land(newPlane) {

        if (!(newPlane instanceof Plane)) { return "invalid plane"; }
        if (this.stormy == true) { return "stormy weather warning"; }
        if (this.landedAircraft.indexOf(newPlane) !== -1) { return "plane already landed"; }
        if (this.getCount() >= this.maxCap) { return "max capacity reached"; } 

        this.landedAircraft.push(newPlane);
        return "plane added"; 

    }

    takeOff(planeToGo) {
        if (!(planeToGo instanceof Plane)) { return "invalid plane"; } 
        if (this.stormy == true) { return "stormy weather warning"; }
        let index = this.landedAircraft.indexOf(planeToGo);
        if (index === -1) { return "plane not landed"; }

        this.landedAircraft.splice(index, 1);
        return "plane took-off";    
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
        //stormy variable created in case there are different severities of weather
        //that need to be tracked more accurately than just stormy and not stormy
        return "weather set";
    }

    getStormy() { return this.stormy; }

    




}