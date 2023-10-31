import { whoLikes } from './whoLikes';

test('When empty string array input then return no one likes this', () => {
    expect(whoLikes([])).toBe("no one likes this")
});

test('When string array with one element input then return name likes this', () => {
    expect(whoLikes(['Peter'])).toBe('Peter likes this')
});

test('When string array with one element input then return name likes this', () => {
    expect(whoLikes(['John'])).toBe('John likes this')
});

test('When string array with one element input then return name likes this', () => {
    expect(whoLikes(['Brad'])).toBe('Brad likes this')
});

test('When string array with two elements input then return name1 and name2 like this', () => {
    expect(whoLikes(['Peter', 'Charlotte'])).toBe('Peter and Charlotte like this')
});

test('When string array with two elements input then return name1 and name2 like this', () => {
    expect(whoLikes(['Jade', 'Charlotte'])).toBe('Jade and Charlotte like this')
});

test('When string array with two elements input then return name1 and name2 like this', () => {
    expect(whoLikes(['Elsie', 'Mark'])).toBe('Elsie and Mark like this')
});

test('When string array with three elements input then return name1, name2 and name3 like this', () => {
    expect(whoLikes(['Jade', 'Charlotte', 'David'])).toBe('Jade, Charlotte and David like this')
});

test('When string array with three elements input then return name1, name2 and name3 like this', () => {
    expect(whoLikes(['Stanley', 'Martin', 'Greta'])).toBe('Stanley, Martin and Greta like this')
});

test('When string array with three elements input then return name1, name2 and name3 like this', () => {
    expect(whoLikes(['Ryan', 'Margot', 'Micheal'])).toBe('Ryan, Margot and Micheal like this')
});

test('When string array with four elements input then return name1, name2 and 2 others like this', () => {
    expect(whoLikes(['Ryan', 'Margot', 'Micheal', 'Will'])).toBe('Ryan, Margot and 2 others like this')
});

test('When string array with four elements input then return name1, name2 and 2 others like this', () => {
    expect(whoLikes(['Simu', 'Margot', 'Micheal', 'Will'])).toBe('Simu, Margot and 2 others like this')
});

test('When string array with four elements input then return name1, name2 and 2 others like this', () => {
    expect(whoLikes(['Simu', 'America', 'Micheal', 'Will'])).toBe('Simu, America and 2 others like this')
});


test('When string array with five elements input then return name1, name2 and 3 others like this', () => {
    expect(whoLikes(['Simu', 'Margot', 'Micheal', 'Will', 'America'])).toBe('Simu, Margot and 3 others like this')
});

test('When string array with five elements input then return name1, name2 and 3 others like this', () => {
    expect(whoLikes(['Johnny', 'Helen', 'Micheal', 'Will', 'America'])).toBe('Johnny, Helen and 3 others like this')
});

test('When string array with five elements input then return name1, name2 and 3 others like this', () => {
    expect(whoLikes(['Kenny', 'Matt', 'Micheal', 'Will', 'America'])).toBe('Kenny, Matt and 3 others like this')
});

test('When string array with five elements input then return name1, name2 and 3 others like this', () => {
    expect(whoLikes(['Kenny', 'Matt', 'Micheal', 'Will', 'America', 'John', 'Brad', 'Mark', 'David', 'Simu', 'Margot'])).toBe('Kenny, Matt and 9 others like this')
});