// Introduction to Immediately Invoked Function Expression (IIFE)
// these are used for Data Abstraction (Privacy of data)

(function abc(){
    var x = 4;
    console.log(x); 
})();

// will give error because it is inside the IIFE
// console.log(x);



// Returning a object from IIFE

var a = (function(){
    var y = "kartik";
    var ag = 19;
    return{
        name:y,
        age:ag
    }
})();

console.log(a.name,a.age);