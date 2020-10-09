import faker from 'faker';
import {replace} from './replace';

describe('Replace', () => {
  test('Should replace a smiley', () => {
    const input = ':)';
    const expected = '🙂';
    const result = replace(input);
    expect(result).toEqual(expected);
  });

  test('Should replace a smiley at the begining of a string', () => {
    const preprend = faker.lorem.word();
    const input = `${preprend} :)`;
    const expected = `${preprend} 🙂`;
    const result = replace(input);
    expect(result).toEqual(expected);
  });

  test('Should replace a smiley at the end of a sentence', () => {
    const append = faker.lorem.word();
    const input = `:) ${append}`;
    const expected = `🙂 ${append}`;
    const result = replace(input);
    expect(result).toEqual(expected);
  });

  test('Should replace a smiley in a sentence when separated by whitespace', () => {
    const append = faker.lorem.word();
    const preprend = faker.lorem.word();
    const input = `${preprend} :) ${append}`;
    const expected = `${preprend} 🙂 ${append}`;
    const result = replace(input);
    expect(result).toEqual(expected);
  });

  test('Should replace a smiley in the middle of a word', () => {
    const append = faker.lorem.word();
    const preprend = faker.lorem.word();
    const input = `${preprend}:)${append}`;
    const result = replace(input);
    expect(result).toEqual(input);
  });
});
