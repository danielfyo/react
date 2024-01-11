export function testTemplateStringBehavior(){
    console.warn('## 3.1 template strings');
    const firstName = 'Daniel';
    const lastName = 'Yepes';

    // this is the old way to concatenate strings
    const basicGreetings = firstName + ' ' + lastName;
    console.log(basicGreetings);

    // template strings allow us to simplify the process
    const templateString = `${firstName} ${lastName}`;
    console.log(templateString);

    // we can use it calling methods too
    const templateString2 = `System says >>  ${getGreetings(firstName, lastName)}`;
    console.log(templateString2);
}

function getGreetings(firstName, lastName) {
    return `Hello: ${firstName} ${lastName}`
}