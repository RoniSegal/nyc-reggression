async function run() {
    await  wrap(1);
    await  wrap(2);
    await  wrap(3);
}

async function wrap(a){
    switch (a) {
        case 1:
            await sleep(1000);
            break;
        case 2:
            await sleep(500);
            break;
    }
}

async function sleep(num) {
    return new Promise(resolve => setTimeout(resolve, num));
}
module.exports.run = run;
