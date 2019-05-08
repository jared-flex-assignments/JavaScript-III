/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: (left of the Dot at call time) or, whenever the function is called by a preceeding dot, the object before that dot is 'this'. This principle is the most commonly used application of the 'this' keyword (approx. 80 percent of use cases). 
* 2. Explicit Binding: whenever JavaScript's .call or .apply method is used, 'this' is explicitly defined.
* 3. new Binding: whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function. A constructor function is a function that returns an object. It's an object creator.
* 4. window/global Binding: when in the global scope, the value of 'this' will be the window/console object.

// Key question to ask: Where is this function invoked?
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2
// code example for Implicit Binding

var person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
        },
        mother: {
            name: 'Debbie',
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

var jared = person('Jared', 36);
jared.sayName();
jared.mother.sayName();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding