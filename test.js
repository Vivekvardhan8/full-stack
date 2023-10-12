let person = {
    name: 'Vivek',
    age: 25
};
 //person.name = 'Vicky';
console.log(person);

let selectedColors = ['red', 'purple'];

function first(message) {
    console.log('first message is ' + message);
}
first('my own message');
// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('drawing with radius '+ radius);
        }
    };
}
let circle = createCircle(4);
// console.log(circle);
circle.draw();
//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing with radius ' + radius);
    }
}
let another = new Circle(3);
another.draw();
//window.alert('Hello broooo');

function createCounter(n) {
    let v = n;
    return function() {
        return v++;
    }
}
const counter = createCounter(4);
counter();
counter();
console.log(counter());
