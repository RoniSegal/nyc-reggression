export function run() {
    func(1);
    func(0);
}

function func(a) {
    if (a) {
        console.log(a);
    }
}
