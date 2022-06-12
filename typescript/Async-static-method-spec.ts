import MyClass from './Async-static-method';
describe('typescript-Async-static-method', () => {
    it('test',async () => {
        await new MyClass().run()
    })
})
