export function testConstBehavior(){

    console.warn("## 2.2 Const");

    const constAge = 35;
    // at this point age is 35 in the main scope
    console.log(`Daniel Yepes is: ${constAge} years old in main scope`);
    if(true){
        const constAge = 18;
        // at this point age is 18 within the internal
        console.log(`Daniel Yepes is: ${constAge} years old within nested scope`);
    }
    // at this point age is 35 back in the main scope it is not modified
    console.log(`Daniel Yepes is: ${constAge} years old again in the main scope`);
    
    try {
        // at this point application will changes bcause of const.js:15 Uncaught TypeError: Assignment to constant variable.
        constAge = 50;
        console.log(`Daniel Yepes is: ${constAge} years old again in the main scope`);
    } catch (error) {
        console.error(error);
    }
}

