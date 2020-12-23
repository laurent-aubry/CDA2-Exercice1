////////////////////////////
// Rappel sur le JavaScript
// Documentation de référence :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux 
////////////////////////////

/*********************************************** */
//Type Référence et Primitif
/*********************************************** */
const number = 1 ; // primitive type
const num2 = number //copie de numbers
console.log(num2) //1 => num2 a copié cette 

/*********************************************** */
//Objet et array sont de type reference :
/*********************************************** */
const chien= {
nom : 'Médor'
}
const chien2 = chien ;

console.log(chien2) ; //Médor => référence pointant sur le même emplacement de mémoire

//****** */
const chien= {
    nom : 'Médor'
}
const chien2 = chien ;
chien.nom = 'Puppy'

console.log(chien2) ; //Log Puppy car le 2ème objet pointe sur le même emplacement en mémoire. Seul le pointeur a été copié et non pas la valeur

//****** */
// Pour réaliser une copie réelle de l'objet (et non pas du pointeur), il faut passer par le "Spread opérator"
const chien= {
    Nom : 'Médor'
    }
const chien2 = {...chien} ;
chien.name = 'Puppy'
console.log(chien2) ; //Médor
    

/*********************************************** */
// Array
/*********************************************** */

//voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push 


/*********************************************** */
// Map
/*********************************************** */

const arr = [1, 2, 3] ;
const multiplieArr = arr.map((num) => {
return num * 2 ;
}) ;
console.log(arr) ; //[1, 2, 3] ;
console.log(multiplieArr) ; //[2, 4, 6] ; nouvel objet

/*********************************************** */
// Filter
/*********************************************** */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/*********************************************** */
// Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value
/*********************************************** */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

/*********************************************** */
// Find
/*********************************************** */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

/*********************************************** */
// Concat
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
/*********************************************** */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

/*********************************************** */
// Slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end 
// (end not included) where start and end represent the index of items in that array. The original array will not be modified
/*********************************************** */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


/*********************************************** */
// Splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
/*********************************************** */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/*********************************************** */
// Push
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
/*********************************************** */

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
