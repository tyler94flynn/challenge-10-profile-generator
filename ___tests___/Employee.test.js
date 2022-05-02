const Employee = require("../lib/Employee");

const example = new Employee('Tyler', '42', 'tyler94flynn@gmail.com');
const name = "Tyler";
const id = '42';
const email = 'tyler94flynn@gmail.com';


test('get name', () => {
    expect(example.name).toEqual(name);
});

test('get id', () => {
    expect(example.id).toEqual(id);
});

test('get email', () => {
    expect(example.email).toEqual(email);
});

test('get role', () => {
    expect(example.getRole()).toEqual('Employee');
});