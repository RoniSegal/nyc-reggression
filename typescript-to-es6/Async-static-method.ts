export default class MyClass {
    run() {
        return MyClass.sleep();
    }

     public static sleep() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }
}
