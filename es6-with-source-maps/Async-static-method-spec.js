import MyClass from './Async-static-method';
describe('es6-with-source-maps-Async-static-method', () => {
    it('test',async () => {
        await new MyClass().run()
    })
})
