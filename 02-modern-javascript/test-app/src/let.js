export function testLetBehavior(){

    console.warn("## 1.1 Let");

    let age = 35;
    // at this point age is 35 in the main scope
    console.log(`Daniel Yepes is: ${age} years old in main scope`);
    if(true){
        let age = 18;
        // at this point age is 18 within the internal
        console.log(`Daniel Yepes is: ${age} years old within nested scope`);
    }
    // at this point age is 35 back in the main scope it is not modified
    console.log(`Daniel Yepes is: ${age} years old again in the main scope`);
}

