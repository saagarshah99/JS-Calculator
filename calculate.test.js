/************HELPER FUNCTIONS*************/

// visiting the appropriate site to simulate/test events
const visit = (cy) => cy.visit("localhost:5500");

// take button array as argument and simulate clicks for each one
const simulateClicks = (cy, buttons) => {
    buttons.forEach(button => cy.get(`[data-cy = ${button}]`).click());
}

// comparing expected value with result
const checkOutput = (cy, expectedValue) => {
    cy.get("[data-cy = output]").should("have.value", expectedValue);
}




/************TESTS*************/

describe("Basic operations (button clicks)", () => {
    it("Adding 2 numbers --> (7 + 2 = 9)", () => {
        visit(cy);
        simulateClicks(cy, ["7", "plus", "2", "equals"]);        
        checkOutput(cy, "9");
    })
    
    it("Subtracting 2 numbers --> (7 - 2 = 5)", () => {
        visit(cy);
        simulateClicks(cy, ["7", "minus", "2", "equals"]);
        checkOutput(cy, "5");
    })
    
    it("Multiplying 2 numbers --> (7 * 2 = 14)", () => {
        visit(cy);
        simulateClicks(cy, ["7", "multiply", "2", "equals"]);        
        checkOutput(cy, "14");
    })
    
    it("Dividing 2 numbers --> (7 / 2 = 3.5)", () => {
        visit(cy);
        simulateClicks(cy, ["7", "divide", "2", "equals"]);
        checkOutput(cy, "3.5");
    })
    
    // each digit of the same number is a separate event
    it("Square Root (double digits) --> sqrt(64) = 8", () => {
        visit(cy);                
        simulateClicks(cy, ["sqrt", "6", "4", "equals"]);
        checkOutput(cy, "8");
    })
    
    it("Secondary operation using answer of first --> 6 * 4 = 24 / 12 = 2", () => {
        visit(cy);                
        simulateClicks(cy, ["6", "multiply", "4", "equals", "divide", "1", "2", "equals"]);
        checkOutput(cy, "2");
    })
    
    // it("Chained operation --> 6 * 4 / 12 = 2", () => {
    //     visit(cy);                
    //     simulateClicks(cy, ["6", "multiply", "4", "divide", "1", "2", "equals"]);
    //     checkOutput(cy, "2");
    // })
})