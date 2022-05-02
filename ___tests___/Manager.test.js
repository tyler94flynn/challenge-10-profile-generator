const Manager = require("../lib/Manager")

const example = new Manager('Tyler', '42', 'tyler94flynn@gmail.com', '100');
const name = "Tyler";
const id = '42';
const email = 'tyler94flynn@gmail.com';
const officeNumber = '100'


test('get name', () => {
    expect(example.name).toEqual(name);
});

test('get id', () => {
    expect(example.id).toEqual(id);
});

test('get email', () => {
    expect(example.email).toEqual(email);
});

test('get officeNumber', () => {
    expect(example.officeNumber).toEqual(officeNumber);
});

test('get role', () => {
    expect(example.getRole()).toEqual('Manager');
});