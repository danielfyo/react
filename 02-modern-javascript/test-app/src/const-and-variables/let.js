export function testLetBehavior(){

    console.warn("## 2.1 Let");

    let letAge = 35;
    // at this point age is 35 in the main scope
    console.log(`Daniel Yepes is: ${letAge} years old in main scope`);
    if(true){
        let letAge = 18;
        // at this point age is 18 within the internal
        console.log(`Daniel Yepes is: ${letAge} years old within nested scope`);
    }
    // at this point age is 35 back in the main scope it is not modified
    console.log(`Daniel Yepes is: ${letAge} years old again in the main scope`);
}

