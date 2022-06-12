export default class MyClass {
    run() {
        return this.sleep();
    }

    async sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
}
