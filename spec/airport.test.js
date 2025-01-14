//imports
import { Plane } from "../src/plane.js";
import { Airport } from "../src/airport.js";
import { assertEquals } from "./asserts.js";
import allPlanes from "./testPlanes.js"

//Repeated functions

export function displayList(listToShow) {
    listToShow.forEach((item) => {
        console.log(item);
        return item;
    });
}


//test export functions

export function test1_1() {
    //Test confirmation message from the land function reports correctly
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
        console.log(`Test 1.1 - check of Land Plane confirmation message : Pass`);        
    } else {
        console.log(`Test 1.1 - check of Land Plane confirmation message : Fail`);
        console.log(`==================`);
        console.log(`Expected: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

export function test1_2() {
    //Compare the length of the list of planes to see if it is one larger
    //to confirm data has been added to the list
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
        console.log(`Test 1.2 - Land Plane functionality confirmation : Pass`);        
    } else {
        console.log(`Test 1.2 - Land Plane functionality confirmation : Fail`);
        console.log(`==================`);
        console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
        console.log(`==================`);        
    } 
}

export function test1_3() {
    //Test to check correct error messaged returned if a non plane is landed
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.land("Cat")
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.3 - land function erroneous data check : Pass`);        
    } else {
        console.log(`Test 1.3 - land function erroneous data check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

export function test1_4() {
    //test to confirm correct error messaged returned if a null is added
    //Arrange
    
    let theAirport = new Airport();
    let expected = "invalid plane";
    

    //Act
    let actual = theAirport.land();
     

    // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.4 - land function erroneous data - null check : Pass`);        
    } else {
        console.log(`Test 1.4 - land function erroneous data - null check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 
}

export function test2_1() {
    //correctly passes out a list of the planes which are presently landed
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
        console.log(`Test 2.1 - Landed Plane List Export function check : Pass`);        
    } else {
        console.log(`Test 2.1 - Landed Plane List Export function check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        displayList(planeList);
        console.log(`==================`);        
    } 

}

export function test3_1() {
    // Test to ensure a plane already in the landed list, cannot be landed.
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
        console.log(`Test 3.1 - plane already landed cannot land check : Pass`);        
    } else {
        console.log(`Test 3.1 - plane already landed cannot land check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test4_1() {
    // test of confirmation that a plane has been removed from the list.
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
        console.log(`Test 4.1 - test of the plane took off confirmation : Pass`);        
    } else {
        console.log(`Test 4.1 - test of the plane took off confirmation : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test4_2() {
    //Compare the length of the list of planes to see if it is one smaller
    //confirming that the land takeOff function worked.
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
        console.log(`Test 4.2 - Test to confirm that a plane has been removed : Pass`);        
    } else {
        console.log(`Test 4.2 - Test to confirm that a plane has been removed : Fail`);
        console.log(`==================`);
        console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
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
    let testPlane = allPlanes.testPlane3;

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
        console.log(`Expected plane count: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
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
        console.log(`Test 4.3 - takeOff null error handling check : Pass`);        
    } else {
        console.log(`Test 4.3 - takeOff null error handling check : Fail`);
        console.log(`==================`);
        console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

export function test4_4() {
    //Comfirm if passing erroneous data is handled correctly 
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
        console.log(`Test 4.4 - takeOff invalid data handling check : Pass`);        
    } else {
        console.log(`Test 4.4 - takeOff invalid data handling check : Fail`);
        console.log(`==================`);
        console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
        console.log("Planes in list:");
        displayList(theAirport.listPlanes())
        console.log(`==================`);        
    } 
}

export function test5_1() {
    //Comfirmation test that attempting to take off a plane which isn't landed returns the
    //correct error message
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
        console.log(`Test 5.1 - takeOff on a non landed plane handling check : Pass`);        
    } else {
        console.log(`Test 5.1 - takeOff on a non landed plane handling check : Fail`);
        console.log(`==================`);
        console.log(`Expected plane count: ${expected}; Actual: ${actual};`);
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
        console.log(`Test 6.1 - airport able to return how many planes are landed check : Pass`);
    } else {
        console.log(`Test 6.1 - airport able to return how many planes are landed check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
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
        console.log(`Test 6.2 - airport able to return the max cap check : Pass`);
    } else {
        console.log(`Test 6.2 - airport able to return the max cap check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
    }
}

export function test7_1() {
    // Check if the confirmation to adjusting maxCap is correct
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
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);
    }
}

export function test7_2() {
    //Confirm maxCap adjustment has actually been made
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
        console.log(`export function response: ${expected}; Actual: ${actual}; Error Code: ${errorCode}`);
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
        console.log(`export function response: ${expected}; Actual: ${actual};`);
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
        console.log(`export function response: ${expected}; Actual: ${actual};`);
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
        console.log(`export function response: ${expected}; Actual: ${actual};`);
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
        console.log(`export function response: ${expected}; Actual: ${actual}`);
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
        console.log(`export function response: ${expected}; Actual: ${actual}`);
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
        console.log(`Preadjustment check failure: export function response: ${expected}; Actual: ${actual}`);
        console.log(`Postadjustment check failure: export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}


export function test9_1() {
    // Check if the airport is able to return the weather

    //Arrange
    let theAirport = new Airport();
    let expected = "Sunny";

    //Act
    let actual = theAirport.getWeather();

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 9.1 - confirmation the airport can report the weather : Pass`);        
    } else {
        console.log(`Test 9.1 - confirmation the airport can report the weather : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test9_2() {
    // Test if the setWeather confirmation message is returned

    //Arrange
    let theAirport = new Airport();
    let expected = "weather set";

    //Act

    let actual = theAirport.setWeather("Stormy");

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 9.2 - setWeather confirmation message check : Pass`);        
    } else {
        console.log(`Test 9.2 - setWeather confirmation message check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}

export function test9_3() {
    // Check if the weather can be changed and is able to return the changed weather
    //Arrange
    let theAirport = new Airport();
    let expected = "Stormy";

    //Act

    let errorCode = theAirport.setWeather("Stormy");
    let actual = theAirport.getWeather();

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 9.3 - can the weather be changed correctly? : Pass`);        
    } else {
        console.log(`Test 9.3 - can the weather be changed correctly? : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; ErrorCode: ${errorCode}`);
        console.log(`==================`);        
    } 

}

export function test9_4() {
    // Check setWeather can handle null values correctly
    //Arrange
    let theAirport = new Airport();
    let expected = "invalid weather";

    //Act

    let actual = theAirport.setWeather();
    

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 9.4 - setWeather erroneous data: null check : Pass`);        
    } else {
        console.log(`Test 9.4 - setWeather erroneous data: null check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`==================`);        
    } 

}

export function test9_5() {
    // Check set weather can handle empty strings correctly
    //Arrange
    let theAirport = new Airport();
    let expected = "invalid weather";

    //Act

    let actual = theAirport.setWeather("");
    

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 9.5 - setWeather erroneous data: empty string check : Pass`);        
    } else {
        console.log(`Test 9.5 - setWeather erroneous data: empty string check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`==================`);        
    } 

}


export function test10_1() {
    // test to ensure Unable to land planes if the weather is stormy
    //Arrange
    let theAirport = new Airport();
    let expected = "stormy weather warning";
    let testPlane = allPlanes.testPlane1;
    theAirport.setWeather("Stormy");


    //Act    
    let actual = theAirport.land(testPlane);

    //Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 10.1 - stormy weather stops a plane from landing check : Pass`);        
    } else {
        console.log(`Test 10.1 - stormy weather stops a plane from landing check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`Weather: ${theAirport.getWeather()}; Stormy: ${theAirport.getStormy()}`);

        console.log(`==================`);        
    } 

}

export function test10_2() {
    // Able to land planes if the weather has been changed from stormy
    //Arrange
    let theAirport = new Airport();
    let expected = "plane added";
    let testPlane = allPlanes.testPlane1;
    theAirport.setWeather("Stormy");

    let stormyLanding = theAirport.land(testPlane);

    theAirport.setWeather("Sunny");


    //Act

    
    let actual = theAirport.land(testPlane);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 10.2 - changing back from stormy allows a plane to land : Pass`);        
    } else {
        console.log(`Test 10.2 - changing back from stormy allows a plane to land : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`Weather: ${theAirport.getWeather()}; Stormy: ${theAirport.getStormy()}`);
        console.log(`stormy Landing attempt: ${stormyLanding}`);

        console.log(`==================`);        
    } 

}

export function test11_1() {
    // Unable for planes to take off if the weather is stormy
    //Arrange
    let theAirport = new Airport();
    let expected = "stormy weather warning";
    let testPlane = allPlanes.testPlane1;
    theAirport.setWeather("Stormy");


    //Act

    
    let actual = theAirport.takeOff(testPlane);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 11.1 - stormy weather stops a plane from taking off : Pass`);        
    } else {
        console.log(`Test 11.1 - stormy weather stops a plane from taking off : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`Weather: ${theAirport.getWeather()}; Stormy: ${theAirport.getStormy()}`);

        console.log(`==================`);        
    } 

}

export function test11_2() {
    // Able for planes to take off if the weather has been changed from stormy
    //Arrange
    let theAirport = new Airport();
    let expected = "plane added";
    let testPlane = allPlanes.testPlane1;
    theAirport.setWeather("Stormy");

    let stormyTakeOff = theAirport.takeOff(testPlane);

    theAirport.setWeather("Sunny");


    //Act

    
    let actual = theAirport.land(testPlane);

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 11.2 - changing back from stormy allows a plane to take-off : Pass`);        
    } else {
        console.log(`Test 11.2 - changing back from stormy allows a plane to take-off : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}; `);
        console.log(`Weather: ${theAirport.getWeather()}; Stormy: ${theAirport.getStormy()}`);
        console.log(`stormy takeoff attempt: ${stormyTakeOff}`);

        console.log(`==================`);        
    } 

}

/*
export function template() {
    // Purpose of test
    //Arrange
    let theAirport = new Airport();

    //Act

   // Assert
    let result = assertEquals(actual, expected);

    //report
    if (result) {
        console.log(`Test 1.4 - erroneous data - negatives check : Pass`);        
    } else {
        console.log(`Test 1.4 - erroneous data - negatives check : Fail`);
        console.log(`==================`);
        console.log(`export function response: ${expected}; Actual: ${actual}`);
        console.log(`==================`);        
    } 

}
*/

