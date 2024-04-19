//imports
import { Plane } from "./src/plane.js";
import { Airport } from "./src/airport.js";
import { assertEquals } from "./spec/asserts.js";
import allPlanes from "./spec/testPlanes.js"

//Repeated Functions

function displayList(listToShow) {
    listToShow.forEach((item) => {
        console.log(item);
        return item;
    });
}


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

function test2_1() {
    //passes out a list of the planes which are presently landed
    //Arrange

    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    let expected = 2;

    //Act
    let planeList = theAirport.listPlanes();
    let actual = planeList.length;

    // Assert
    let result = assertEquals(actual, expected); //checks to see if the length of the list matches the expected 

    //manual check to visually confirm the automatic one
    //displayList(planeList);

    //report
    if (result) {
        console.log(`Test 2.1 - List Export : Pass`);        
    } else {
        console.log(`Test 2.1 - List Export : Fail`);
        console.log(`==================`);
        !result && console.log(`Function response: ${expected}; Actual: ${actual}`);
        displayList(planeList);
        console.log(`==================`);        
    } 

}

function test3_1() {
    // Ensure a plane already in the landed list, cannot be landed.
    //Arrange
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    let expected = "plane already landed";

    //Act

    let actual = theAirport.addPlane(allPlanes.testPlane1);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 3.1 - plane already landed check : Pass`);        
    } else {
        console.log(`Test 3.1 - plane already landed check : Fail`);
        console.log(`==================`);
        !result && console.log(`Function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}


function template() {
    // Purpose of test
    //Arrange

    //Act

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








//function calls
test1_1();
test1_2();
test1_3();
test1_4();
test2_1();
test3_1();