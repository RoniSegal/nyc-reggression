import MyClass from './Class-async-method'; 
 describe('typescript-Class-async-method', () => {
    it('test',async () => {
        const myClass = new MyClass();
        await myClass.run()
    })
 })
