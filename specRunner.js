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

function test4_1() {
    // test confirmation that a plane has been removed from the list.
    //Arrange
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    let expected = "plane took-off";

    //Act

    let actual = theAirport.remPlane(allPlanes.testPlane1);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 4.1 - plane took off check : Pass`);        
    } else {
        console.log(`Test 4.1 - plane took off check : : Fail`);
        console.log(`==================`);
        !result && console.log(`Function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

function test4_2() {
    //Compare the length of the list of planes to see if it is one smaller
    //Arrange
    
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    let expected = theAirport.getCount()-1;
    let testPlane = allPlanes.testPlane1;

    //Act
    let errorCode = theAirport.remPlane(testPlane)
    let actual = theAirport.getCount();

    // Assert
    let result = assertEquals(actual, expected);

    //report

    //manual check
    //displayList(theAirport.listPlanes())

    //automatic check
    if (result) {
        console.log(`Test 4.2 - remove Plane confirmation : Pass`);        
    } else {
        console.log(`Test 4.2 - remove Plane confirmation : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

function test4_2b() {
    //Compare the length of the list of planes to see if it is one smaller
    //repeat of 4.2 but with a larger data set
    //Arrange
    
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    theAirport.addPlane(allPlanes.testPlane3);
    theAirport.addPlane(allPlanes.testPlane4);
    theAirport.addPlane(allPlanes.testPlane5);
    
    let expected = theAirport.getCount() - 1;
    let testPlane = allPlanes.testPlane5;

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let errorCode = theAirport.remPlane(testPlane)
    let actual = theAirport.getCount();

    // Assert
    let result = assertEquals(actual, expected);

    //report

    //manual check
    /*console.log("Pre-list:");
    displayList(prelist);
    console.log("post-list");
    displayList(theAirport.listPlanes())*/

    //automatic check
    if (result) {
        console.log(`Test 4.2b - remove Plane larger list confirmation : Pass`);        
    } else {
        console.log(`Test 4.2b - remove Plane larger list confirmation : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

function test4_3() {
    //Comfirm if passing a null is handled correctly 
    //Arrange
    
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    theAirport.addPlane(allPlanes.testPlane3);
    theAirport.addPlane(allPlanes.testPlane4);
    theAirport.addPlane(allPlanes.testPlane5);
    
    let expected = "invalid plane";
    

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let actual = theAirport.remPlane()
    

    // Assert
    let result = assertEquals(actual, expected);

    //report

    

    //automatic check
    if (result) {
        console.log(`Test 4.3 - remove plane null error handling check : Pass`);        
    } else {
        console.log(`Test 4.3 - remove plane null error handling check : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

function test4_4() {
    //Comfirm if passing a erroneous data is handled correctly 
    //Arrange
    
    let theAirport = new Airport();
    theAirport.addPlane(allPlanes.testPlane1);
    theAirport.addPlane(allPlanes.testPlane2);
    theAirport.addPlane(allPlanes.testPlane3);
    theAirport.addPlane(allPlanes.testPlane4);
    theAirport.addPlane(allPlanes.testPlane5);
    
    let expected = "invalid plane";
    

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let actual = theAirport.remPlane("Cat")
    

    // Assert
    let result = assertEquals(actual, expected);

    //report

    

    //automatic check
    if (result) {
        console.log(`Test 4.4 - remove plane invalid data handling check : Pass`);        
    } else {
        console.log(`Test 4.4 - remove plane invalid data handling check : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
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








//Test function calls
test1_1();
test1_2();
test1_3();
test1_4();
test2_1();
test3_1();
test4_1();
test4_2();
test4_2b();
test4_3();
test4_4();