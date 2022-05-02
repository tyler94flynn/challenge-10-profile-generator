const Engineer = require("../lib/Engineer")

const example = new Engineer('Tyler', '42', 'tyler94flynn@gmail.com', 'https://github.com/tyler94flynn');
const name = "Tyler";
const id = '42';
const email = 'tyler94flynn@gmail.com';
const github = 'https://github.com/tyler94flynn'


test('get name', () => {
    expect(example.name).toEqual(name);
});

test('get id', () => {
    expect(example.id).toEqual(id);
});

test('get email', () => {
    expect(example.email).toEqual(email);
});

test('get github', () => {
    expect(example.gitHub).toEqual(github);
});

test('get role', () => {
    expect(example.getRole()).toEqual('Engineer');
});