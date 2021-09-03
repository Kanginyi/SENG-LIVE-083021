//console.log();
//debugger

console.log("This is day 1");

/*

Can use the typeof operator to check what type of data type it is

* Data Types *

Strings:
    "Can use double quotes"
    'Can use single quotes'
    `Can use backticks`

Booleans:
Either truthy or falsey values
    Falsey values:
        0, null, undefined, "" (empty string), false, NaN (Not a Number)
    Truthy Values:
        Literally everything else

Numbers:
    Integers 100
    Floats   .10
    NaN

BigInt:

Objects:
Objects have properties and methods attached to them

Undefined:
No return value
No value at all

Nothing:
    Nothing

Symbol:
    Has a colon and an identifier to the right of that colon
    :symbol

For Symbol, you have to call the Symbol class with a string inside of it, like so:
    console.log(typeof Symbol("name"));
--------------------------------------------------------------------------------------------
Primitive VS Non Primitive Data Types

Primitive Data Types
-A primitive data type can only hold a single piece of data
-String, Numbers

Non Primitive Data Types
-Can hold a fuckton of data, including primitives or other non primitive data types
-Objects, Arrays
--------------------------------------------------------------------------------------------
What Are Variables and Why Are They Useful:
-Let us assign values to a space in memory
-Let us assign data to a placeholder
-Containers for pieces of data
-Name storages for data
-Store data to refer back to for later

Can use let, const, and var (for legacy or older code)
Don't you ever fucking use var in JS.

let: The value of let can be reassigned, but the name of the variable cannot be redeclared.
     Use let when you know that the variable will change
     let can be declared without initialization

const: The value of const can NOT be reassigned OR redeclared.
       Use const for EVERYTHING else.
       Usually start shit off with const, then go back and change it later to let if you need to.

Best variable name practices:
    -You can name it whatever you want, it's arbitrary. BUT the identifier should always represent the data that is being contained.
    -Should not start with numbers
    -Use camelCaseForMoreThanOneWord, NO SPACES
    -Cannot use reserved keywords
--------------------------------------------------------------------------------------------
SCOPE:
Global Scope:
	Everything we have defined so far, lives in the global scope.
	We can access these values ANYWHERE in our code.
Local Scope:
	Usually things within {}, [], etc.
	You can ONLY access these within that code block.
--------------------------------------------------------------------------------------------
Conditional Statements:
    Provide control flow
    We can perform certain actions based on a condition

*/