import MyClass from './Class-async-method'; 
 describe('es6-with-source-maps-Class-async-method', () => {
    it('test',async () => {
        const myClass = new MyClass();
        await myClass.run()
    })
 })
