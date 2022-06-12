export function run() {
    return execute();
}

async function execute(){
    await wrap(1);
    await wrap(0);
}

async function wrap(a){
    if (a) {
        await  sleep();
    }
    await sleep2();
}

async function sleep(){
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function sleep2(){
    return new Promise(resolve => setTimeout(resolve, 1000));
}
