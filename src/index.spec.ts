import { boilEggs } from './boiledeggs';

test('When input 0 return 0', () => {
    expect(boilEggs(0)).toBe(0)
});
test('When input 1 return 5', () => {
    expect(boilEggs(1)).toBe(5)
});

test('When input 2 return 5', () => {
    expect(boilEggs(2)).toBe(5)
});

test('When input 3 return 5', () => {
    expect(boilEggs(3)).toBe(5)
});

test('When input 8 return 5', () => {
    expect(boilEggs(8)).toBe(5)
});

test('When input 9 return 10', () => {
    expect(boilEggs(9)).toBe(10)
});

test('When input 16 return 10', () => {
    expect(boilEggs(16)).toBe(10)
});

test('When input 17 return 15', () => {
    expect(boilEggs(17)).toBe(15)
});