import MyClass from './Async-static-method';
describe('typescript-to-es6-Async-static-method', () => {
    it('test',async () => {
        await new MyClass().run()
    })
})
