export default class MyClass {
    run() {
        return MyClass.sleep();
    }

    static sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
}
