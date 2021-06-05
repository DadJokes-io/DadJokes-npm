import DadJokes from '../';
import axios from 'axios';
import { JokeResponseArray } from '../models/joke';
import { MockJokesArray } from '../__mocks__/jokeByType.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const token = 'token';
const dadjokes = new DadJokes(token);

describe('jokeByType', () => {
  test('return parsed joke data', async () => {
    const data: JokeResponseArray = MockJokesArray;

    mockedAxios.get.mockResolvedValue({ data });

    const jokeData = await dadjokes.jokeByType('knock-knock');

    expect(jokeData).toEqual(data.body);
  });

  test('failure to retrive jokeByType', async () => {
    const errorMessage = 'this is an error';

    mockedAxios.get.mockRejectedValue(errorMessage);

    const jokeData = await dadjokes.jokeByType('knock-knock');

    expect(jokeData).toEqual(errorMessage);
  });
});
