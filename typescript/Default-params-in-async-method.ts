export function run() {
    return wrap();
}
async function wrap(){
    await sleep();
    await sleep(500);
}
function sleep(i  =1000){
    return new Promise(resolve => setTimeout(resolve, i));
}
