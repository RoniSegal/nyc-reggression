function run() {
    function* generator(i) {
        if(i ==0) {
            yield i;
        } else {
            yield i + 10;
        }
    }

    const gen = generator(10);

    console.log(gen.next().value);
// expected output: 10

    console.log(gen.next().value);
// expected output: 20

    const gen2 = generator(0);

    console.log(gen2.next().value);
// expected output: 0

    console.log(gen2.next().value);
// expected output: 10
}
module.exports.run = run;
