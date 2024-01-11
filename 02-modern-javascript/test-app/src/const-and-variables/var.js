export function testVarBehavior(){

    console.warn("## 2.3 Var");

    var currentAge = 35;
    // at this point age is 35 in the main scope
    console.log(`Daniel Yepes is: ${currentAge} years old in main scope`);
    if(true){
        currentAge = 18;
        // at this point age is 18 within the internal since it is the same one variable as previous one
        console.log(`Daniel Yepes is: ${currentAge} years old within nested scope`);
    }
    // at this point age is 18 in the main scope is 18 because it is the same one variable as previous one
    console.log(`Daniel Yepes is: ${currentAge} years old again in the main scope`);

    currentAge = 50;
    console.log(`Daniel Yepes is: ${currentAge} years old again in the main scope`);
}

