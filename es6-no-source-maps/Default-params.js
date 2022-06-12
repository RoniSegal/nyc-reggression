function run() {
    method(1)
    method();
}

const method = (i = 0) => console.log(i);
module.exports.run = run;
