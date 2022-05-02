const Intern = require("../lib/Intern")

const example = new Intern('Tyler', '42', 'tyler94flynn@gmail.com', 'UofT');
const name = "Tyler";
const id = '42';
const email = 'tyler94flynn@gmail.com';
const school = 'UofT'


test('get name', () => {
    expect(example.name).toEqual(name);
});

test('get id', () => {
    expect(example.id).toEqual(id);
});

test('get email', () => {
    expect(example.email).toEqual(email);
});

test('get school', () => {
    expect(example.school).toEqual(school);
});

test('get role', () => {
    expect(example.getRole()).toEqual('Intern');
});