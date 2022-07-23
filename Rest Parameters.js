{
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
addPower('a string', 4, 5, 6);
//TypeScript Type for One-dimensional Array
// zipcodes is an array of strings
let zipcodes = ['03255', '02134', '08002', '03063'];
// Pushing a number to zipcodes will generate an error
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
zipcodes.push(90210);
