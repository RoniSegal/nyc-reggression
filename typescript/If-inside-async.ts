export function run() {
    return wrapper();
}
async function wrapper() {
    await asyncFunction('foo');
    await asyncFunction('bar');
}
async function asyncFunction(param: string) {
    if (param === 'foo') {
        console.log('foo');
    }
}
