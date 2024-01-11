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
}