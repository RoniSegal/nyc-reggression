import MyClass from './Class-async-method'; 
 describe('typescript-to-es6-Class-async-method', () => {
    it('test',async () => {
        const myClass = new MyClass();
        await myClass.run()
    })
 })