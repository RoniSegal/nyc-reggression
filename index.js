const shell = require('shelljs');
const fs = require('fs');
const {readdir, readdirSync, copyFileSync} = require("fs");
const folders = ['typescript','typescript-to-es6', 'es6-with-source-maps', 'es6-no-source-maps'];
const files = ['if-else',
    'If-no-else',
    'If-contains-async',
    'If-inside-async',
    'If-inside-generator',
    'Default-params',
    'Default-params-in-async-method',
    'Default-param-in-generator-method',
    'Ternary-operator',
    'Ternary-operator-with-await-in-both-sides',
    'Ternary-operator-with-await-in-single-side',
    'switch-case',
    'switch-case-contains-async',
    'switch-case-inside-async',
    'switch-case-inside-generator',
    'Named-function',
    'functions',
    'Async-method',
    'Class-method',
    'Class-async-method',
    'Private-method',
    'Static-method',
    'Arrow-functions'
]

// readdirSync('typescript').forEach(file => {
//     if (file.endsWith('.ts')) {
//         // copyFileSync(`typescript/${file}`, `es6-with-source-maps/${file.replace('.ts', '.js')}`);
//         copyFileSync(`typescript/${file}`, `es6-no-source-maps/${file.replace('.ts', '.js')}`);
//     }
// })
// for (const folder of folders) {
//     shell.mkdir(folder)
//     const suffix = folder.toLowerCase().indexOf('typescript') > -1 ? 'ts' : 'js'
//     for (const file of files) {
//         if(!((folder.toLowerCase().indexOf('no-source') > -1) && (file.toLowerCase().indexOf('class') >-1)))
//         // fs.writeFileSync(`${folder}/${file}.${suffix}`, generateFileContent(file, folder))
//         fs.writeFileSync(`${folder}/${file}-spec.${suffix}`, generateTestFileContent(file, folder))
//     }
// }

function generateTestFileContent(file, folder){
 const itFuncPrefix  = file.toLowerCase().indexOf('async') > -1 ? 'async () => {' : '() => {';
 const importStatement = generateImportStatement(file, folder);
 return `${importStatement}
 describe('${folder}-${file}', () => {
    it('test',${itFuncPrefix}
        ${generateTestCode(file, folder)}
    })
 })`
}


function generateFileContent(file, folder){
    if(file.toLowerCase().indexOf('class') > -1){
        return `export default class MyClass {
            run() {
                // Add sample code here
            }
        }`
    }
    if(folder.toLowerCase().indexOf('no-source-maps') > -1){
        return `function run() {
            // Add sample code here
        }
        module.exports.run = run`
    }
    return `export function run() {
                // Add sample code here
            }`
}

function generateImportStatement(file, folder) {
    if(file.toLowerCase().indexOf('class') > -1){
        return `import MyClass from './${file}'; `
    }
    if(folder.toLowerCase().indexOf('no-source-maps') > -1){
        return `const run = require('./${file}').run; `
    }
    return `import {run} from './${file}'; `
}

function generateTestCode(file, folder) {
    let statement = '';
    if(file.toLowerCase().indexOf('class') > -1){
        statement += `const myClass = new MyClass();
        `;
        if(file.toLowerCase().indexOf('async') > -1) {
            statement += 'await myClass.run()'
        } else{
            statement += ' myClass.run()'
        }
    }else if(file.toLowerCase().indexOf('async') > -1) {
        statement += 'await run()'
    } else{
        statement += 'run()'
    }
    return statement;
}
