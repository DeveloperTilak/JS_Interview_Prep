// 3. What is the event loop in JavaScript?

/*
    Event loop is machenism in JS which handles asynchronous operation

*/

//4. What is the difference between synchronous and asynchronous programming in JavaScript?
/*
    synchronous excute one line at a time in order
    when code  excute independently that called asynchronous
*/


console.log(1);

function p(){
    console.log(2)
}
p()

setTimeout(() => {
    console.log(3)
}, 4000);

console.log(4)