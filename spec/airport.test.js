//imports
import { Plane } from "../src/plane.js";
import { Airport } from "../src/airport.js";
import { assertEquals } from "./asserts.js";
import allPlanes from "./testPlanes.js"

//Repeated export functions

export function displayList(listToShow) {
    listToShow.forEach((item) => {
        console.log(item);
        return item;
    });
}


//test export functions

export function test1_1() {
    //Test's confirmation message of data successfully added
    //Arrange
    let expected = "plane added";
    let theAirport = new Airport();
    let testPlane = allPlanes.testPlane1;

    //Act

    let actual = theAirport.land(testPlane)

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

export function test1_2() {
    //Compare the length of the list of planes to see if it is one larger
    //Arrange
    
    let theAirport = new Airport();
    let expected = theAirport.getCount()+1;
    let testPlane = allPlanes.testPlane1;

    //Act
    let errorCode = theAirport.land(testPlane)
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

export function test1_3() {
    //returns and error if a non plane is added
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.land("Cat")
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.3 - erroneous data check : Pass`);        
    } else {
        console.log(`Test 1.3 - erroneous data check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

export function test1_4() {
    //returns and error if a null is added
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.land();
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.4 - erroneous data - null check : Pass`);        
    } else {
        console.log(`Test 1.4 - erroneous data - null check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

export function test2_1() {
    //passes out a list of the planes which are presently landed
    //Arrange

    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
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
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        displayList(planeList);
        console.log(`==================`);        
    } 

}

export function test3_1() {
    // Ensure a plane already in the landed list, cannot be landed.
    //Arrange
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    let expected = "plane already landed";

    //Act

    let actual = theAirport.land(allPlanes.testPlane1);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 3.1 - plane already landed check : Pass`);        
    } else {
        console.log(`Test 3.1 - plane already landed check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test4_1() {
    // test confirmation that a plane has been removed from the list.
    //Arrange
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    let expected = "plane took-off";

    //Act

    let actual = theAirport.takeOff(allPlanes.testPlane1);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 4.1 - plane took off check : Pass`);        
    } else {
        console.log(`Test 4.1 - plane took off check : : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test4_2() {
    //Compare the length of the list of planes to see if it is one smaller
    //Arrange
    
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    let expected = theAirport.getCount()-1;
    let testPlane = allPlanes.testPlane1;

    //Act
    let errorCode = theAirport.takeOff(testPlane)
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

export function test4_2b() {
    //Compare the length of the list of planes to see if it is one smaller
    //repeat of 4.2 but with a larger data set
    //Arrange
    
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.land(allPlanes.testPlane4);
    theAirport.land(allPlanes.testPlane5);
    
    let expected = theAirport.getCount() - 1;
    let testPlane = allPlanes.testPlane5;

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let errorCode = theAirport.takeOff(testPlane)
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

export function test4_3() {
    //Comfirm if passing a null is handled correctly 
    //Arrange
    
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.land(allPlanes.testPlane4);
    theAirport.land(allPlanes.testPlane5);
    
    let expected = "invalid plane";
    

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let actual = theAirport.takeOff()
    

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

export function test4_4() {
    //Comfirm if passing a erroneous data is handled correctly 
    //Arrange
    
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.land(allPlanes.testPlane4);
    theAirport.land(allPlanes.testPlane5);
    
    let expected = "invalid plane";
    

    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let actual = theAirport.takeOff("Cat")
    

    // Assert
    let result = assertEquals(actual, expected);

    //report

    //manual check
    //displayList(theAirport.listPlanes())

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

export function test5_1() {
    //Comfirm if passing a erroneous data is handled correctly 
    //Arrange
    
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.land(allPlanes.testPlane4);
    
    let testPlane = allPlanes.testPlane5;
    
    let expected = "plane not landed";
    
    //manual check
    //displayList(theAirport.listPlanes())


    //prelist for manual check - TIL JS uses pass by reference
    //let prelist = theAirport.listPlanes(); 
    

    //Act
    let actual = theAirport.takeOff(testPlane)
    

    // Assert
    let result = assertEquals(actual, expected);

    //report
    //manual check
    //displayList(theAirport.listPlanes())

    
    //automatic check
    if (result) {
        console.log(`Test 5.1 - remove non landed plane handling check : Pass`);        
    } else {
        console.log(`Test 5.1 - remove non landed plane handling check : Fail`);
        console.log(`==================`);
        !result && console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

export function test6_1() {
    // Check if the airport is able to return how many planes are presently landed
    //Arrange
    let theAirport = new Airport();
    let expected = 0;

    //Act
    let actual = theAirport.getCount();

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 6.1 - airport usage check : Pass`);
    } else {
        console.log(`Test 6.1 - airport usage check : : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
    }
}

export function test6_2() {
    // Check if the airport is able to return the present set max capacity
    //Arrange
    let theAirport = new Airport();
    let expected = 10;

    //Act
    let actual = theAirport.getMaxCap();

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 6.2 - airport max cap check : Pass`);
    } else {
        console.log(`Test 6.2 - airport max cap check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
    }
}

export function test7_1() {
    // Check if the you are able to adjust maxCap
    //Arrange
    let theAirport = new Airport();
    let expected = "cap changed";

    //Act

    let actual = theAirport.changeCap(5);

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 7.1 - airport Max Cap adjustment response check : Pass`);
    } else {
        console.log(`Test 7.1 - airport Max Cap adjustment response check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
    }
}

export function test7_2() {
    // Confirm maxCap adjustment has been made
    //Arrange
    let theAirport = new Airport();
    let expected = 5;

    //Act

    let errorCode = theAirport.changeCap(5);
    let actual = theAirport.getMaxCap();

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 7.2 - airport Max Cap adjustment confirmation check : Pass`);
    } else {
        console.log(`Test 7.2 - airport Max Cap adjustment confirmation check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
        console.log(`==================`);
    }
}

export function test7_3() {
    // Confirm maxCap adjustment handles invalid data
    //Arrange
    let theAirport = new Airport();
    let expected = "invalid number";

    //Act

    let actual = theAirport.changeCap("Cat");
    

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 7.3 - airport Max Cap adjustment erroneous data check : Pass`);
    } else {
        console.log(`Test 7.3 - airport Max Cap adjustment erroneous data check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual};`);
        console.log(`==================`);
    }
}
export function test7_4() {
    // Confirm maxCap adjustment handles null data
    //Arrange
    let theAirport = new Airport();
    let expected = "invalid number";

    //Act

    let actual = theAirport.changeCap();
    

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 7.4 - airport Max Cap adjustment null data check : Pass`);
    } else {
        console.log(`Test 7.4 - airport Max Cap adjustment null data check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual};`);
        console.log(`==================`);
    }
}

export function test7_5() {
    // Confirm maxCap adjustment handles negative numbers correctly
    //Arrange
    let theAirport = new Airport();
    let expected = "invalid number";

    //Act

    let actual = theAirport.changeCap(-1);
    

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 7.5 - airport Max Cap adjustment negative data check : Pass`);
    } else {
        console.log(`Test 7.5 - airport Max Cap adjustment negative data check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual};`);
        console.log(`==================`);
    }
}

export function test8_1() {
    // test to confirm you are unable to add planes once max capacity has been reached
    //Arrange
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.changeCap(3);
    let testPlane = allPlanes.testPlane4;
    let expected = "max capacity reached";
    
    //Act
    let actual = theAirport.land(testPlane);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 8.1 - attempt to exceed max capacity check handling : Pass`);        
    } else {
        console.log(`Test 8.1 - attempt to exceed max capacity check handling : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}
export function test8_2() {
    // test to confirm you are able to add planes when one below max capacity (edge case)
    //Arrange
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.changeCap(4);
    let testPlane = allPlanes.testPlane4;
    let expected = "plane added";
    
    //Act
    let actual = theAirport.land(testPlane);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 8.2 - attempt to land plane 1 below max capacity check handling : Pass`);        
    } else {
        console.log(`Test 8.2 - attempt to land plane 1 below max capacity check handling : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test8_3() {
    // test to confirm you are able to add planes when max capacity has been increased 
    //Arrange
    let theAirport = new Airport();
    theAirport.land(allPlanes.testPlane1);
    theAirport.land(allPlanes.testPlane2);
    theAirport.land(allPlanes.testPlane3);
    theAirport.changeCap(3);
    let testPlane = allPlanes.testPlane4;
    let preAdjustmentExpected = "max capacity reached"
    let expected = "plane added";
    
    //Act
    let preAdjustmentActual = theAirport.land(testPlane);
    theAirport.changeCap(4);
    let actual = theAirport.land(testPlane);

    // Assert
    let preAdjustmentResult = assertEquals(preAdjustmentActual, preAdjustmentExpected);
    let result = assertEquals(actual, expected);

    //report
    if (result&&preAdjustmentResult) {
        console.log(`Test 8.3 - a plane unable to land will be able to if the cap is raised check : Pass`);        
    } else {
        console.log(`Test 8.3 - a plane unable to land will be able to if the cap is raised check : Fail`);
        console.log(`==================`);
        !result && console.log(`Preadjustment check failure: export function response: ${expected}; Actual: ${actual}`);
        !result && console.log(`Postadjustment check failure: export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}


export function template() {
    // Purpose of test
    //Arrange

    //Act

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.4 - erroneous data - negatives check : Pass`);        
    } else {
        console.log(`Test 1.4 - erroneous data - negatives check : Fail`);
        console.log(`==================`);
        !result && console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}


