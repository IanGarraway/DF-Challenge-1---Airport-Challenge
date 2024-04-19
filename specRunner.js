//imports
import { Plane } from "./src/plane.js";
import { Airport } from "./src/airport.js";
import { assertEquals } from "./spec/asserts.js";
import allPlanes from "./spec/testPlanes.js"




//test functions

function test1_1() {
    //Arrange
    let expected = "plane added";
    let theAirport = new Airport();
    let testPlane = allPlanes.testPlane1;

    //Act

    let actual = theAirport.addPlane(testPlane)

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.1 - Add Plane : Pass`);        
    } else {
        console.log(`Test 1.1 - Add Plane : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
        
    }


    

}




function template() {
    //## <test number> Purpose of test
    //Arrange

    //Act

    //Assert

    //Report

}








//function calls
test1_1();