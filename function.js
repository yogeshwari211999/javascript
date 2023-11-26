// function declarations
function sum1(a,b){return a+b;}

// function expressions
const sum=((a,b)=>{return a+b;})

// closurefunction

const getNumber=((a)=>{
    const add=((b)=>{
        return a+b;
    })
    return add;
})

getAdd=getNumber(10);
console.log(getAdd(5))

// You've created a function getNo that takes a parameter a and returns another function sub. The sub function is a closure because it "closes over" the variable a from its outer scope (getNo), allowing it to access and remember the value of a even after getNo has finished executing.
// Practical applications of closures include creating private variables, maintaining state in functional programming, and creating factory functions. Closures are powerful for encapsulating functionality and creating modular and maintainable code.
let getNo=(a=>{
    let sub=((b)=>{
        return b-a;
    })
    return sub;
})
getSub=getNo(5);
console.log(getSub(10));
