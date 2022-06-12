export function run() {
    return execute();
}

async function execute() {
    await wrap(5);
    await wrap(6);
}

async function wrap(a){
    a ===5 ? await sleep(500) : await sleep(1000);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
