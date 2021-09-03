/**
What are Objects?
    -Collection of data nested inside of curly braces
    -Has key:value pairs
        -Keys are referred to as properties

For example:
    const pikachu = {
        //key:value pairs
        name: "Pikachu",
        img: "www.img.com",
        likes: 0
    }

If we want to return the value of a key inside of an object, we can do so with bracket or dot notation:
    pikachu.name;        //Returns "Pikachu", uses dot notation
    pikachu["likes"];    //Returns 0, uses bracket notation

When to use bracket vs dot notation:

    Dot notation is literal
    Cannot be used with variables

    Bracket notation can be used with variables, a lil more flexible

Changing Property Values:
    can use either dot or bracket notation
        pikachu.img = "www.google.com";
        pikachu["img"] = "www.google.com";

Adding New Properties:
    can use either dot or bracket notation
        pikachu.color = "yellow";
        pikachu["color"] = "yellow";

Removing Properties:
    can use either dot or bracket notation
        delete pikachu.color;
        delete pikachu["color"];

Best Practice for Modifying Objects:
    S P R E A D O P E R A T O R

    let oldObject = { key: value };
    let newObject = { ...oldObject, addNewKey: addNewValue }

Looping Through Objects:
    -For...in loop

    Let's create a function here to loop through:
        function objLoops(obj) {
            for (const key in obj) {
                console.log(obj[key]);
            }
        }
*/