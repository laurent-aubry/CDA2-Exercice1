//******************* */
//let et const
//******************* */
let myVar = "ABC" ;
console.log(myVar) ;

myVar = "GHJ" ;
console.log(myVar) ;

//******************* */
//Arrow function
//******************* */

//Avant Next Generation
function GetAddress(home) {
    console.log(home) ;
    }
    GetAddress("1 rue de la liberté" ) ;

//Depuis Next Generation:
const  GetAddress = (home) => {
    console.log(home) ;
    }
GetAddress("1 rue de la liberté") ;
    
//ou 
const  GetAddress = (home) =>  {return home} ;
console.log (GetAddress("1 rue de la lib ") );

//ou 
const  GetAddress = home =>  home ;
console.log (GetAddress("1 rue de la lib ") );

//******************* */
//Export & Import Modules ou composant
//******************* */

//Avant Next Generation
export default MyComposant ;

import MyComposant from './monFichier.js' ;
import MyComp from './monFichier.js' ;

//Depuis Next Generation:
export const Composant1 ;
export const Composant2 ;

import { Composant1  } from './monFichier.js'
import { Composant2  } from './monFichier.js' 

import { Composant2  as MyComp } from './monFichier.js' ;

import * as multipleFct from './monFichier.js' ;
multipleFct.Composant1 ;

//******************* */
//Classes, property & method
//******************* */

class Utilisateur {                                                 // Définition
    identifiant = 'Antoine'                                         // Propriété
    appeler = () => 'Hello ' + this.identifiant                     // Méthode
    }
    

const myUtilisateur = new Utilisateur()                             // Utilisation de la classe
console.log(myUtilisateur.appeler ()) ;
console.log(myUtilisateur.identifiant) ;
    
//******************* */
//Class Utilisateur extends GroupedeUtilisateurs  /  Inheritance
//******************* */

//-----------------------
// Ancienne syntaxe (ES6)
class Animal{
    constructor () {
    this.race = 'cocker' ;
    }
    imprimeRace() { console.log(this.race) ;}
    }
    
class Chien extends Animal {
    constructor () {
    super() ; //pour extends Animals
    this.name = 'Médor' ;
    this.race= 'teckel' ;
    }
    appeler() { console.log('Au pied ' + this.name) ;}
    }

const monChien = new Chien() ;
monChien.appeler() ;
monChien. imprimeRace () ;

//-----------------------
// Ancienne syntaxe (ES7)
class Animal{
    race = 'cocker' ;
}

//	PROPRIETE

class Animal {
    race = 'cocker' ;
   imprimeRace = () => { console.log(this.race) ;}
}

//	METHODE gérée comme une propriété contenant une arrow function

//******************* */
// Spread and REST operator
//******************* */

// Spread : sépare les éléments d’une array ou d’un objet

//Syntaxe :
const newArray = [...oldArray,1 ,2]
const newObject = {...oldObject, newPrperty : 'Hello'}

//Exemple :
const arr = [1, 2, 3] ;
const newArr = [...arr, 4]              //L’array est passée en tant qu’objet
console.log(newArr)

//---
const chien = {
    nom : 'medor'
    }
const newChien = {
    ...chien,
    age : 5
    }
console.log(newChien)
    

// REST : rassemble les éléments dans une array. Permet de passer plusieurs arguments en une seule opération. (moins utilisé)

function sortArgs(...args) {
    return args.sort()
    }
    
//Exemple :
const filter = (...args) => {
    return args.filter(el => el === 1) ;
    }
console.log(filter(1, 2, 4))
//	Log [1] uniquement
    

//******************* */
// Destructuring
// Permet d’extraire une ou plusieurs éléments d’une array ou propriété d’un object et de les enregistrer dans des variables
//******************* */

[ordre, nom] = ['Au pied', 'Médor'] ;
console.log(ordre) ; 
console.log(nom) ;

//---
const arr = [1, 2, 3] ;
[num1, , num3] = arr ;
console.log(num1, num3) ; //1 et 3