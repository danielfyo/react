export function testLiteralObjectsBehavior(){
    console.warn('# 4.1 Literal Objects');

    // here we are defining an object named person using {}
    const person = {
        firstName: 'Daniel',
        lastName: 'Yepes',
        age: 35,
        // and here we have and object as property of the main object
        contactData: {
            address: '742 de Evergreen Terrace',
            phoneNumber: '764-84377',
            zipCode: 24072,
        },
    }

    // in the console, you will see the object properties unfolding the {}
    console.log("Original person:");
    console.log(person);

    // Copying opjects could be something like that
    const copiedPerson = person;
    copiedPerson.firstName = 'Homero';
    copiedPerson.lastName = 'Sipmson';
    console.log("Bad Copied person:");
    console.log(copiedPerson);

    // but at this point the original one was modified
    console.log("Original person overwrited:");
    console.log(person);

    // we can use the manual assignation 
    const copiedPerson2 = {
        firstName: 'Bart',
        lastName: 'Sipmson',
        age: copiedPerson.age,
        address: copiedPerson.address,
    }
    console.log("Copied person manually:");
    console.log(copiedPerson2);

    // or the spread operator ... 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
    const copiedPerson3 = {...copiedPerson};
    copiedPerson3.firstName = 'Lisa';
    console.log("Copied person with spread operator:");
    console.log(copiedPerson3);

    // in that case we will keep the original values for copiedPerson
    console.log("Copied person not modified:");
    console.log(copiedPerson);
}