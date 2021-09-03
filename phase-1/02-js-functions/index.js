/*
What are functions and why do we use them?
    Instructions to perform a task
    Reusable code
    Include parameters
    Building blocks of JavaScript
    Allows us to structure larger programs

What does a function look like?
Function Declaration:

---When a user lands on our page, this function will execute any JS designated for the page load---
function init () {
    //perform a task/write some logic
    console.log("page has loaded, run the program");
}
--------------------------------------------------------------------------
Function Expression:

const createPokemon = function() {
    //anonymous function
    let pokemon = prompt("Which Pokemon are you today?");
    return pokemon;
}

createPokemon();

Const and let CANNOT be hoisted

Arrow Functions

const renderPokemon = () => {
    //Code block to be executed
}
--------------------------------------------------------------------------
Parameters VS Arguments:
    Parameters are placeholders/variables for a value that is going to be passed to a function
    Parameters are used upon function declaration

    Arguments are the values that are actually being passed into the function when the function is being invoked
--------------------------------------------------------------------------
Reference vs Invocation

Invocation is calling it with the ()
    functionName();

Referencing it is:
    functionName;
--------------------------------------------------------------------------
First Class Functions
    Assign a function to a variable
    Passed functions as an argument to other functions *** callback function
    Use functions as a return value for another function *** the function returning a function is referred to as a high order function

Callback Functions:
    Callback functions will CALLBACK whatever function you pass through as an argument.


Closures:
    Scopes: Global/Local Scopes

    function renderPokemon(char) {
        //Use char inside of here
        let pokemon = char;     //Local-scope pokemon variable
        console.log(`Rendering ${char}`);
    }

    console.log(pokemon);
        THIS SHIT WILL NOT WORK AS IS BECAUSE pokemon IS INSIDE THE FUNCTION BLOCK AND IS IN LOCAL/FUNCTION SCOPE
    HOWEVER

    let pokemon = "pikachu";    //Global-scope pokemon variable
    console.log(pokemon);   //Will return "pikachu"



*/