/* functions on arrays - according to instruction

var femaleNames = ['Ania', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Pioterk', 'Kuba', 'Marek', 'Arek'];
    

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);
};

console.log(allNames); 
*/

// functions on arrays  

var femaleNames = ['Ania', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Pioterk', 'Kuba', 'Marek', 'Arek'];
 
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

function getBiggerArray(newName) {
    if (allNames.indexOf(newName) != -1) {
        console.log('Repeated name');
    } else if (allNames.indexOf(newName) === -1) {
        var x = allNames.push(newName);
    }
};

var newName1 = getBiggerArray('Ania'),
    newName2 = getBiggerArray('Jacek'),
    newName3 = getBiggerArray('Tola');

console.log(allNames); 
