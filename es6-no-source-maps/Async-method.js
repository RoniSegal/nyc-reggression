function run() {
    return sleep();
}

function sleep(){
    return new Promise(resolve => setTimeout(resolve, 1000));
}
module.exports.run = run;
