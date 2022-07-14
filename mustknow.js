// We can use a <script> tag to add JavaScript code to a page.
// the type and language attributes are not required.
// A script in an external file can be inserted with <script src="path/to/script.js"></script>

// ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict"

// data types
const COLOR_RED = "#F00";
console.log(1/0); // infinity
console.log("not a number" *2); // NaN

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Double quote";
let str2 = 'Single quotes are ok too';
let phrase = `backtick can embed another ${str}`;
let multipleLines = `fdfdfd
fffdfd
fffddf`; // with backtick

let nameFieldChecked = true; // true or false
let age = null;

let a;console.log(a); // undefined

console.log(typeof 10n);
console.log(typeof Math);

// conversion
let conv = 12; console.log( String(conv) );
let conv12 = "12"; console.log( typeof Number(conv12));

let ca = cb = cc = 12;
ca++;ca--;

// condition
let test = 1;
if(test == 1) console.log("test == 1");
console.log(test == 1 ? "ok" : "ko"); 

// null coalescing
let nullCoalesce;
console.log( nullCoalesce ?? "null coalescing");

// || returns the first truthy value.
// ?? returns the first defined value.
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

let switcha = 2 + 2; // switch case
switch (switcha) {
 case 4:
    console.log( 'Exactly!' );
    break;
 default:
    console.log( "I don't know such values" );
}

// default params
function testfn(p1 = "default")
{
  console.log(p1);
}
testfn();

/*
Function names
"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
*/

// Function expression
let sayHi = function() { console.log("Hi !");}
sayHi();

// arrow functions
let fnarr1 = a => a*2;
let fnarr2 = () => { return 42; };

// command for debugger
debugger; // debugger stops here

// class
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
  "long identifier" : 5
};

delete user.age; // remove age property
console.log("long identifier " + user["long identifier"]);

// computed identifier
let fruit = "apple";

let bag = {
   [fruit] : 5
};
console.log("computed identifier " + bag.apple);

// property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
console.log("property value shorthand " + makeUser("C", "V").name);

// property existence
let userProps = { name: "John", age: 30 };
console.log( "property existence " + ("age" in userProps));

// for ... in loop
console.log("for ... in loop");
for(key in userProps) {
  console.log(key + " : " + userProps[key]);
}

// objects in js are stored by reference
let copy = userProps;
copy.age = 46;
console.log("objects are stored by ref :  " + userProps.age);

let aaa = {}; 
let bbb = aaa;
// comparison between objects is done by reference 
console.log( "equality betwen two objects is done by ref : " + (aaa === bbb));

// clone with Object.assign
let userAssign = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(userAssign, permissions1, permissions2); // now user = { name: "John", canView: true, canEdit: true }
// If the copied property name already exists, it gets overwritten:
console.log("Object assign " + JSON.stringify(userAssign));

// constructor function : convention started by a capital letter, always called wiith new operator
// When a function is executed with new, it does the following steps:
// - A new empty object is created and assigned to this.
// - The function body executes. Usually it modifies this, adds new properties to it.
// - The value of this is returned
function UserC(name) {
  this.name = name;
  this.isAdmin = false;
}

let newUser = new UserC("toto");
console.log ("constructeur " + JSON.stringify(newUser));

// optional chaining : "?." stops the evaluation if the value before ?. is undefined or null and returns undefined
let userAC = {}; // user has no address
console.log("optional chaining " + userAC?.address?.street ); // undefined (no error)

// optional chaining variant for method
// if a ref is null or undefined, returns undefined
let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

// Symbols are useful to add hidden properties to object
let id = Symbol("id");
let tempSymbol = {};
tempSymbol[id] = 1;
console.log(JSON.stringify(tempSymbol));
console.log(tempSymbol[id]);

// global Symbol registry
// read from the global registry
let idSymbol = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( idSymbol === idAgain ); // true

// no way in js to customize operators in js


// conversion
console.log(user ? "Objects are all true in boolean context" : "objects arens't true in boolean context");

//To do the conversion, JavaScript tries to find and call three object methods:
// Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
let userHint = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
console.log("userHint to string " + String(userHint)); // hint: string -> {name: "John"}
console.log("userHint to number " + Number(userHint + 500)); // hint: default -> 1500

// Otherwise if hint is "string" try calling obj.toString() or obj.valueOf(), whatever exists
// Otherwise if hint is "number" or "default" try calling obj.valueOf() or obj.toString(), whatever exists
// toString and valueOf are method from ancient times

// 7 primitive types and there exists object wrappers around some primitives : String, Number, Boolean or BigInti
let strHello = "Hello";
console.log("Method applied to a primitive : " + strHello.toUpperCase()); // imply creation of an object wrapper temporaliy

// syntatic sugar for number
let million = 1_000_000;
let pi = 3.14;
console.log("toFixed : " + pi.toFixed(5));

// Math.floor rounds down, Math.ceil rounds up, Math.round to nearest
let num = 1.23456;
console.log("Math.round round nearest : " +  Math.round(num * 100) / 100 );

// parseInt and parseFloat read a number fron string until they can't
console.log("parseInt : " + parseInt('100px'));
console.log("parseFloat : " + parseFloat('12.5em'));

// other Math functions : Math.random, Math.min, Math.max

// string
console.log("string length is a property : " + multipleLines.length);

// to get char at position pos use square brackets or method charAt
console.log("First char of Hello : " + strHello[0]);

// iterate over characters 
for ( let char of "Hello") console.log(char);

// strings are immutable
// 2 ways to search a substring
console.log("very long string".indexOf("string"));
console.log("very long string".includes("string"));

// slice method
let stringify = "stringify";
console.log("slice(start [, end]) : " + stringify.slice(4));
// Negative values for start/end are also possible. They mean the position is counted from the string end:
console.log("slice with negative values " + stringify.slice(-2));

// UTF 16 char numeric code
console.log("tr.codePointAt(pos) Returns the code for the character at position pos : " + stringify.codePointAt(0));
console.log("tr.fromCodePoint(code) creates a character : " + String.fromCodePoint(65));


// Arrays
let fruits = ["Apple", "Orange", "Plum"];
console.log("The total count of the elements in the array is its length : " + fruits.length);
console.log("method at to get last element: " + fruits.at(-1)); // with negative elements on at we start from end

// push to append element at the end // pop takes an element from the end -> fast
// shift get an element from the beginning // unshift add an element to the beginning -> slow
for (let fruit of fruits)
  console.log(fruit);

// toString - Arrays have their own implementation of toString method that returns a comma-separated list of elements.
console.log(fruits);

// delete array elements with splice
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// The method arr.concat creates a new array that includes values from other arrays and additional items.
let arr_concat = [ 1, 2];
console.log(arr_concat.concat(3, 4));

// indexOf
console.log(arr_concat.indexOf(2));
console.log( fruits.find( (item, index, arr) => item[0] == 'P'));

// array filter is similar to find but return an array

// The arr.map method is one of the most useful and often used.
let arrMap = [ 1 , 2, 3 , 4, 5, 6, 7, 8, 0, 10, 11];
console.log(arrMap.map( e => 2*e));
arrMap.reverse();
arrMap.sort(); // The items are sorted as strings by default.
console.log("arr sorted : " + arrMap);


// The str.split(delim) method splits the string into an array by the given delimiter delim.

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
let arrT = ['Bilbo', 'Gandalf', 'Nazgul'];
let strT = arrT.join(';'); // glue the array into a string using ;
console.log( strT ); // Bilbo;Gandalf;Nazgul

// reduce used to calculate a single value based on the array
console.log("reduce :" + arrMap.reduce((sum, current)=> current + sum));


// Symbol.iterator 
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// Arrays and strings are most widely used built-in iterables.

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it
let arrLike = Array.from(arrayLike); // (*)
arrLike.push('aaa');
console.log(arrLike.pop()); // World (method works)

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
// we should use map methods: set, get
// To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);


// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
let set = new Set();

let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

console.log( visitsCountMap.get(john) ); // 123

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
// it works with arrays or iterables
let userSplit = {};
[userSplit.name, userSplit.surname] = "John Smith".split(' ');
console.log(userSplit.name); // John
console.log(userSplit.surname); // Smith

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

// rest
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Object destructuring : The destructuring assignment also works with objects.
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title : t, width : w, height : h} = options;
console.log(t + " " + w + " " + h);

// destructuring objects
const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
console.log(frontend, backend);

const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
console.log(courseOne, courseTwo);


// we pass object to function

// smart function parameters...and it immediately expands it to variables
function showMenu(  {title = "Untitled", width = 200, height = 100, items = []}  ) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

// Date and time

// only known operation between object : difference between 2 dates but at first dates are converted to number
let now = new Date();
let tomorrow = new Date();
tomorrow.setTime(now.getTime()+24*60*60*1000);
console.log("diff between tomorrow and now : "+ String(tomorrow-now));

let Jan01_1970 = new Date(0); // milliseconds since jan 1 197
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
now.getDay(); // get day of week from sunday 0 to Saturday 6
console.log(now.getDate()); // return day of month

// date auto correction
let strangeDate = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(strangeDate); // ...is 1st Feb 2013!

// We can also set zero or even negative values
let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log( date ); // 31 Dec 2015

// diff between 2 dates is given in ms
let start = Date.now(); // milliseconds count from 1 Jan 1970
for (let i = 0; i < 100000; i++) {  // do a long job
  let doSomething = i * i * i;
}
let end = Date.now(); // done
console.log( `The loop took ${end - start} ms` ); // subtract numbers, not date


let ms = new Date(Date.parse('2012-01-26T13:51:50.417-07:00')); // string format should be: YYYY-MM-DDTHH:mm:ss.sssZ
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY


// JSON methods
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
  date : new Date()
};
let json = JSON.stringify(student);
console.log(json); // The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object
// some objects are skipped : Function properties (methods), Symbolic keys and values, Properties that store undefined
console.log( JSON.stringify(student, ['name', 'age'])); // limit serialization to 2 properties


// parse JSON
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log( JSON.parse(userData));

// Serialize a date with a reviver function
let strJson = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(strJson, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log( meetup.date.getDate() ); // now works !

// Rest parameters, variable list of arguments
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log( sumAll(1, 2, 3) ); // 6

// spread syntax, it expands an iterable object into a list of arguments
let arr = [3, 5, 1];
console.log( Math.max(...arr) );

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

console.log( [...strHello] ); // H,e,l,l,o

// The spread syntax internally uses iterators to gather elements, the same way as for..of does
// There’s a subtle difference between Array.from(obj) and [...obj]:
// Array.from operates on both array-likes and iterables.
// The spread syntax works only with iterables.
// So, for the task of turning something into an array, Array.from tends to be more universal.
console.log( Array.from(strHello));

// copy array or copy object
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// variable, scope, closure




