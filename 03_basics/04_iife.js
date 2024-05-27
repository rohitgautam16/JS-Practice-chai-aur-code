// Immediately Invoked Functions Expression (IIFE) //

(function chai(){
    // NAMED IIFE
    console.log("DB CONNECTED");
})();

(() => {
    console.log(`DB TWO CONNECTED`);
})();

((name) => {
    console.log(`DB TWO CONNECTED ${name}`);
})("Rohit")