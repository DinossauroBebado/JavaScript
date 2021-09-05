console.log("Dinossauro")

document.getElementById("demo").innerHTML = 10 + 20

document.write(20+20)

//window.alert(42)
// ------------------------------------------------------------
var x,y,z;

x = 5;
y = 6;
z = x + y;

document.getElementById("total").innerHTML = "the value of z is " + z + ".";
// ------------------------------------------------------------
// number are writen with or without decimal
// strings are text write with double or simple quotes :
//--------Variaveis
var variavel ;
variavel = "isso é uma variavel"
console.log(variavel);

var u = 30 ;
var t  = 2 ;
var z = u+t ;
console.log(z);
//---------------------------------------------------------

//let
// não pode redeclarar o let
let carName;
carName = 'fusca';
// let carName = "focus";
console.log(carName);

//const
//nao muda

const PI = 3.141592653589793;
//operadores

//atribuir

var a = 5 ;
var b = 3 ;

//soma
var soma = a + b ;
console.log("soma " + soma);

//subtração
var sub = a - b ;
console.log("subtração " + sub);

//mult
var mult = a*b ;
console.log("multipliacação " + mult);

//exponecial
var exp = a**b ;
console.log("exponecial " + exp);

//divisao
var div = a/b ;
console.log("divisao " + div);

//resto
var rest = a%b ;
console.log("resto " + rest);

//DataTypes---------------------------------------

let d = 16 + 4 + " Capivarão" ;

console.log(d);

let f = "Capivarão "+  16 + 4 ;

console.log(f);

//notação cientifica

let ciencia = 123e5 ;
console.log(ciencia);

//arrays

const dinos = ["velociraptor", "Tiranossauro","estegossauro"];

console.log(dinos[0]);//start at zero

//objetos --> dicionario

const paises = {peru:"turquia", japao: "cuba" }
console.log(paises.peru );


//typeof equivalente a type()


console.log(typeof 3);
console.log(typeof "Montoia");

//undefined equivalente a None



//Funções-------------------------------------------------



function multiplicar(n1,n2) {
  return n1*n2 ;
}

let multi = multiplicar(2,4);

console.log(multi);
