let promise=new Promise((res,rej)=>{
    let num=10;
    if(num>100){
        res("numis resolved");
    }
    else rej("rejected");
})

promise.then((val=>console.log(val))).catch((err)=>(console.log(err)));

const myFun=((resolve,reject)=>{
    setTimeout(() => {
        let randomNum=Math.random()*10;
        console.log(randomNum);
        if(randomNum<5){
            resolve("random number is greater than 5");
        }
        else reject("random number not statisfied so it's rejected")
    }, 2000);
})

let myPromiseCall=
new Promise(myFun).then((val)=>{console.log(val)}).catch((err)=>console.log(err,"rejected"))


const getAdder = (a) => {
    // The inner function "add" is a closure as it captures the variable "a"
    const add = (b) => {
        return a + b;
    };

    return add; // Return the inner function (closure)
};

const addNo = getAdder(1); // Here, add5 becomes a closure with "a" set to 5
console.log(addNo(10)); // Outputs 8, because add5 remembers the value of "a" as 5


