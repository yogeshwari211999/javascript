/** person is the prototype of student. When student tries to access the sayHello method,
 it doesn't find it directly on itself, so it looks up the prototype chain and finds it
  in the person object **/

const person={
    name:"Yogesh",
    sayHello:function(){console.log(`my name is ${this.name}`)}
}

const student=Object.create(person);
student.major="CSE";

student.sayHello();


// approach-2
// Parent object (prototype)
const animal = {
    sound: 'Generic Animal Sound',
    makeSound: function() {
        console.log(this.sound);
    }
};

// Child object inheriting from the parent
const dog = Object.create(animal);
dog.sound = 'Woof!';

// Accessing properties and methods
console.log(dog.sound);        // Outputs: Woof!
dog.makeSound();               // Outputs: Woof!

// If a property is not found on the object, JavaScript looks up the prototype chain
const cat = Object.create(animal);
console.log(cat.sound);        // Outputs: Generic Animal Sound
cat.makeSound();               // Outputs: Generic Animal Sound
// In this example:

// The animal object serves as the prototype for the dog and cat objects. It has a sound property and a makeSound method.

// The dog object is created using Object.create(animal), which sets animal as its prototype. The dog object then has its own sound property, which overrides the one in its prototype.

// When you access a property or method on an object, JavaScript looks for that property or method on the object itself. If it doesn't find it, it looks up the prototype chain.

// Both dog and cat objects can access the sound property and makeSound method from their common prototype (animal).

// This approach to inheritance is more flexible than classical inheritance, as it allows objects to inherit directly from other objects, and modifications to the prototype are reflected in all objects that inherit from it. It's a fundamental aspect of JavaScript's object-oriented design.

// If you have any questions or if there's another topic you'd like to explore, feel free to let me know!





