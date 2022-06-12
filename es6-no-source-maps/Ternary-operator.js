function run() {
    wrap(5);
    wrap(6);
}

function wrap(a){
    a ===5 ? console.log('five') : console.log('not five');
}
module.exports.run = run;
