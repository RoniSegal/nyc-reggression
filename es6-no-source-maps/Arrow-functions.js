function run() {
    foo()
}

const foo = () => console.log('foo')

module.exports.run = run;
