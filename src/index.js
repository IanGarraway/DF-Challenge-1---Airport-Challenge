import { Airport } from "./airport.js";
import allPlanes from "../spec/testPlanes.js"

let theAirport = new Airport();

//reused functions
function displayList() {
    let listToShow = theAirport.listPlanes();
    console.log("Landed Airplanes: ");
    if (listToShow.length == 0) { console.log("No planes landed"); }
    listToShow.forEach((item) => {
        console.log(item);
        
    });
}

//initial settings
theAirport.changeCap(5);


//title
console.log(`Demonstration of the Airport Flow Control Software `);
console.log('                   --------');

//demonstation of user story 2 : As a representative of the airport I would 
//like to know what planes are landed so that I know what planes are at the 
//airport
console.log(`At present there are no planes at the airport`);
displayList();
console.log('-');

//Demonstation of user story 1: As a Air Traffic controller I would like to 
//instruct a plane to land so that it can be added to the list of planes at the
//airport
console.log(`An air traffic controller instructs a plane to land and it is added to the list of landed planes`);
theAirport.land(allPlanes.testPlane1);
displayList();
console.log(`-`);

//demonstration of user story 3: As a Air Traffic Controller I would like to
//ensure a plane isn't already in the airport before I instruct it to land
//so that I don't accidentally instruct an already landed plane to land again.
console.log(`If the air traffic controller attempts to land a plane already recorded as landed:`);
console.log(`They will be stopped with the following error: ${theAirport.land(allPlanes.testPlane1)}`);
console.log(`-`);

//demonstration of user story 4: As a Air Traffic Controller I would like to be
//able to instruct a plane to take - off so that it can be removed from the list
// of planes at the airport

theAirport.land(allPlanes.testPlane2);
theAirport.land(allPlanes.testPlane3);
theAirport.land(allPlanes.testPlane4);
theAirport.land(allPlanes.testPlane5);


console.log(`The following planes are in the airport:`);
displayList();
console.log(`If the air traffic controller indicates G-1-4 is to depart`);
theAirport.takeOff(allPlanes.testPlane4);
displayList();
console.log(`-`);

//Demonstration of user story 5: As a Air Traffic Controller I would like to
//ensure a plane is at the airport before I instruct it to take - off so that
// I don't accidentally instruct a plane not at the airport to leave it.
console.log(`If however that plane was not landed at the airport they will get`);
console.log(`the following error: ${theAirport.takeOff(allPlanes.testPlane4)}`);
console.log(`-`);

//Demonstration of user story 6: As a representative of the airport I would like
//to know the capacity of the airport is so that I know how much space is 
//available
console.log(`While being able to see the list of planes in the airport is useful`);
console.log(`it can be helpful though to see the count of planes in regards to`);
console.log(`also seeing the maximum capacity of the airport.`);
console.log(`presently the capacity of the airport is: ${theAirport.getCount()}/${theAirport.getMaxCap()}`);
console.log(`-`);

//Demonstration of user story 7: As a representative of the airport I would like
// to be able to control the capacity of the airport so that we don't have more
//planes landed then we can manage
console.log(`Capacity of the airport might change though. So it is possible to`);
console.log(`change the maximum capacity of the airport.`);
theAirport.changeCap(4);
console.log(`The capacity of the airport is now: ${theAirport.getCount()}/${theAirport.getMaxCap()}`);
console.log(`-`);

//Demonstration of user story 8: As a air traffic controller I would like to ensure
//there is capacity to manage the plane before I allow it to land so that I don't
//land planes we can't manage.
console.log(`Due to this tracking, if a air traffic controller attempts to land a`);
console.log(`plane when capacity has been reached they get this error: ${theAirport.land(allPlanes.testPlane4)}`);
console.log();
console.log(`If the capacity though is raised, the plane will be able to land`);
theAirport.changeCap(10);
console.log(`The capacity of the airport is now: ${theAirport.getCount()}/${theAirport.getMaxCap()} and when we try to land the plane`);
theAirport.land(allPlanes.testPlane4);
displayList();
console.log(`we now can and the capacity of the airport is now: ${theAirport.getCount()}/${theAirport.getMaxCap()}. `);
console.log(`-`);

//Demonstration of user story 9: As a representative of the airport I would like
// to be able to set the weather so the system accurately reports to the
//controllers if a plane can land or not.
console.log("Weather plays a large part in the safety of an airport. So it is");
console.log("important that the system is able to report back on what the ");
console.log(`weather is, at the moment it is reporting that The Weather is: ${theAirport.getWeather()}`); 
theAirport.setWeather("Stormy");
console.log(`however if the weather takes a turn and becomes dangerous to for aircraft`);
console.log(`to take off or approach it can be set to report something else such as:`);
console.log(`The Weather is : ${theAirport.getWeather()}`);
console.log(`-`);

//Demonstration of user story 10: As an air traffic controller, I want the
//system to prohibit planes from landing during stormy weather conditions, so
//that potential damage to aircraft and infrastructure is avoided.

//Demonstration of user story 11: As an air traffic controller, I want the 
//system to prevent planes from taking off during stormy weather, so that safety 
//is maintained and risks  of accidents are minimized.

console.log(`Stormy weather can be hazardess to both aircraft and infrastructure`);
console.log(`So while the weather is reporting as stormy and attempts to `);
console.log(`take-off or land will be met with the following error messages:`);
console.log(`Weather : ${theAirport.getWeather()}`);
console.log(`Take-off: ${theAirport.takeOff(allPlanes.testPlane3)}`);
console.log(`Land: ${theAirport.land(allPlanes.testPlane6)}`);
displayList();
console.log(`However once the storm has passed and the weather is no longer stormy:`);
theAirport.setWeather("Sunny");
console.log(`Weather : ${theAirport.getWeather()}`);
console.log(`Take-off: ${theAirport.takeOff(allPlanes.testPlane3)}`);
console.log(`Land: ${theAirport.land(allPlanes.testPlane6)}`);
displayList();

