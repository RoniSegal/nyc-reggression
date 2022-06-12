export default class MyClass {
    run() {
        return this.sleep();
    }

    private async sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
}
