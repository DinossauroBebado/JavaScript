console.log("hello world")


//-----------methods

var person = {
   firstName : "john",
   lastName :"doe",
   id : 1234 ,
   fullName: function(){
     return this.firstName + ' ' + this.lastName ;
   }
};

document.getElementById('methods').innerHTML = person.fullName();


//------------acessors
const persona = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
document.getElementById("demo").innerHTML = persona.lang;

const pessoa = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
pessoa.lang = "pt";

document.getElementById("set").innerHTML = pessoa.language;

// Why Using Getters and Setters?
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes
