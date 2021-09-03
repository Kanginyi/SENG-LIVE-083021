/**

What are Arrays?
    -Ordered list that can contain multiple values
    -Each item in an array is referred to as an element
    -Collection of related data

What does an array look like?
    [ ]

Array literals are reader friendly
    const pokemon = ["pikachu", "bulbasaur", "jigglypuff"];

Access elements in an array
    Every element as an associated index
    Called zero-based indexing

Issues with accessing elements through index?
    -Elements inside of an array can change
    -We can try to access indexes that don't exist
        -What if we don't know the length of an array?
            -array.length
                -will tell you the amount of elements inside of the array
            -array.length - 1
                -will tell you the index of the last element

Adding and Removing Elements in an Array:
    .push()     Add element to the end of an array
    .unshift()  Add element to the front of an array
    .shift()    Remove and return element from the front of an array
    .pop()      Remove and return element from the end of an array
        -All of these are destructive methods

Spread Operator
    ...arrayToCopy
    Creates a copy of the original array
        -Nondestructive method, doesn't mutate the original value
    We're "spreading" the contents of the old array into a new one
        -You can check if the new and old arrays are the same by using ===

.slice()
    Nondestructive method that returns a portion of the array, or a complete copy if you want

Pass by Value VS Pass by Reference
    Primitive types are pass by values
    Non-primitive types are pass by reference

    Pass by value:
        Retains original value but will pass the value on
    Pass by reference:
        Any changes made to a reference of the data will be reflected in the original state

Looping:
    .forEach()
    -an array method, you call this shit on an array
    -Steps inside of an array and deals with each element individually as it iterates through the array
    -Will keep going through each element in an array until there are no more elements to iterate through

    -This array method takes in a callback function as an argument
        array.forEach(function(character) {
            console.log(character);
        });
        OR
        array.forEach(character => console.log(character));)
    -Usually use this if you're not changing anything about the elements
        ->i.e. passing each element to another function

    .map()
    for example:
        array.map(function(character) {
            return character.toLowerCase();
        });
 */