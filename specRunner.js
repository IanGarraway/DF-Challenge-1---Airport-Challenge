//imports
import { Plane } from "./src/plane.js";
import { Airport } from "./src/airport.js";
import { assertEquals } from "./spec/asserts.js";
import allPlanes from "./spec/testPlanes.js"




//test functions

function test1_1() {
    //Test's confirmation message of data successfully added
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

function test1_2() {
    //Compare the length of the list of planes to see if it is one larger
    //Arrange
    
    let theAirport = new Airport();
    let expected = theAirport.getCount()+1;
    let testPlane = allPlanes.testPlane1;

    //Act
    let errorCode = theAirport.addPlane(testPlane)
    let actual = theAirport.getCount();

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.2 - Add Plane confirmation : Pass`);        
    } else {
        console.log(`Test 1.2 - Add Plane confirmation : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
        console.log(`==================`);        
    } 
}

function test1_3() {
    //returns and error if a non plane is added
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.addPlane("Cat")
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.3 - erroneous data check : Pass`);        
    } else {
        console.log(`Test 1.3 - erroneous data check : Fail`);
        console.log(`==================`);
        !result && console.log(`Function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

function test1_4() {
    //returns and error if a null is added
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.addPlane();
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.4 - erroneous data - null check : Pass`);        
    } else {
        console.log(`Test 1.4 - erroneous data - null check : Fail`);
        console.log(`==================`);
        !result && console.log(`Function response: ${expected}; Actual: ${actual}`);
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
test1_2();
test1_3();
test1_4();