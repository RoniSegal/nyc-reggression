export function run() {
    func(1);
    func(null);
}

function func(a){
    if (a){
        console.log(a);
    }else {
        console.log('foo');
    }
}
