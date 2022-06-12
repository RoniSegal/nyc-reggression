function run() {
    return execute();
}

async function execute() {
    await wrap(5);
    await wrap(6);
}

async function wrap(a){
    a ===5 ? await sleep(500) : console.log('not five');
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.run = run;
