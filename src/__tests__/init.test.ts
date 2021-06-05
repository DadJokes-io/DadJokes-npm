import DadJokes from '../';

const token = 'token';
const dadjokes = new DadJokes(token);

describe('init', () => {
  test('setter and getter token', () => {
    dadjokes.authToken = 'test';

    const newToken = dadjokes.authToken;

    expect(dadjokes.authToken).toEqual(newToken);
  });
});
