// Ternary Operator

// Condition ? True : False

let age = 15;

if(age >= 18){
    console.log("You are eligible");
}
else{
    console.log("You are not eligible");
}

// Ternary Operator
// ? -> if      : -> else
let result = (age >= 18) ? "You are eligible" : "You are not eligible";

console.log(result);

//

if(age >= 18){
    console.log("You are eligible");
}
else if(age < 18){
    console.log("You must be older than 18")
}
else{
    console.log("You are not eligible");
}

let result2 = (age >= 18) ? "You are eligible" : ((age < 18) ? "You must be older than 18" : "You are not eligible");

console.log (result2);

//

let result3 = (age >= 18) ? "You are eligible" : "";

// Condition ? Expression : Expression


// JSON - JavaScript Object Notation

let jsonData = '{"name":"Json2", "surname":"Statham2"}';


// JavaScript Object

let jsData = {
    name : "Json",
    surname : "Statham",
    getFullName: function(){
        return this.name + this.surname;
    }
}

console.log(jsData.getFullName());
console.log(jsData.name);
console.log(jsonData.name);

let convertedJson = JSON.parse(jsonData);

console.log(convertedJson.surname);

// Alttaki kodu JavaScript objesine çeviriniz:

let data = '{"name":"Emre","age":"23","langs":["HTML", "CSS","JS"]}';

let obj = JSON.parse(data);

console.log(obj);

console.log(obj.name);
console.log(obj.age);
console.log(obj.langs);

//JavaScript'i JSON'a çevirmek için ise:

let myJson = JSON.stringify(obj);
console.log(myJson);

//Regular Expressions - Regex - RegExp

let text = "Visit Google";

//let result4 = text.replace("google", "W3School");
//console.log(result4);

let result5 = text.replace(/google/i, "W3School"); // Case sensitive arama yapabilmemiz için.
console.log(result5);

//Metindeki is'leri bulma: g, global arama (this'in içindeki is de dâhil); i case sensitive (IS de dâhil).

let text2 = "Is this all about js is";

let result6 = text2.match(/is/ig);
console.log(result6);


// Temiz Kod Yazma

// Anlamlı isimler kullanılmalı!
let foo = "john@john.com"; 
let bar = "John";
let ages = 23;
let hux = true;

// Doğrusu
let email = "john@john.com";
let firstName = "John";
// let age = 23;
let isActive = true;

// Fonksiyonlaştırmak işleri ve yönetmeyi kolaylaştırır.

function createFile(name, isPublic){
    if(isPublic){
        createFileWithName(`./public/${name}`);
    } else {
        createFileWithName(name);
    }
}

function createFileWithName(name){
    fs.create(name);
}

//Yanlışı
function isUserNotVerified(user){

}

//Doğrusu: Genelde olumlu ifadeler kullanılır. Pozitif düşünce.
function isUserVerified(user){

}

//Bu gereksiz
if(isActive === true){
    //...
}

// Bu temiz
if(isActive){
    //..
}

// !! kullanımı aynı anda string mi null mu yoksa undefined mı olup olmadığına bakar.

if(!!lastName){
    console.log("Last name !! body");
}
