function run() {
    wrap(1);
    wrap(2);
    wrap(3);
}

function wrap(a){
    switch (a) {
        case 1:
            console.log('one');
        break;
        case 2:
            console.log('two');
        break;
    }
}
module.exports.run = run;
