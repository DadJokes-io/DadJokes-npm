import DadJokes from '../';
import axios from 'axios';
import { JokeResponseArray } from '../models/joke';
import { MockJokesArray } from '../__mocks__/randomJoke.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const token = 'token';
const dadjokes = new DadJokes(token);

describe('randomJoke', () => {
  test('return parsed joke data', async () => {
    const data: JokeResponseArray = MockJokesArray;

    mockedAxios.get.mockResolvedValue({ data });

    const jokeData = await dadjokes.randomJokes();

    expect(jokeData).toEqual(data.body);
  });

  test('failure to retrive randomeJoke', async () => {
    const errorMessage = 'this is an error';

    mockedAxios.get.mockRejectedValue(errorMessage);

    const jokeData = await dadjokes.randomJokes();

    expect(jokeData).toEqual(errorMessage);
  });

  test('console.warn count over limit', async () => {
    const data: JokeResponseArray = MockJokesArray;

    mockedAxios.get.mockResolvedValue({ data });

    const jokeData = await dadjokes.randomJokes(20);

    expect(jokeData).toEqual(data.body);
  });
});
