export function testConstBehavior(){

    console.warn("## 1.1 Const");

    const age = 35;
    // at this point age is 35 in the main scope
    console.log(`Daniel Yepes is: ${age} years old in main scope`);
    if(true){
        const age = 18;
        // at this point age is 18 within the internal
        console.log(`Daniel Yepes is: ${age} years old within nested scope`);
    }
    // at this point age is 35 back in the main scope it is not modified
    console.log(`Daniel Yepes is: ${age} years old again in the main scope`);
    // at this point application will changes bcause of const.js:15 Uncaught TypeError: Assignment to constant variable.
    age = 50;
    console.log(`Daniel Yepes is: ${age} years old again in the main scope`);
}

