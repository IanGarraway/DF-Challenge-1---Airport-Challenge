export class Airport{
    constructor() {
        this.landedAircraft = [];
            
    }

    addPlane(plane) {
        this.landedAircraft.push(plane);
        return "plane added";
    }

    getCount() {
        return this.landedAircraft.length;
    }


}