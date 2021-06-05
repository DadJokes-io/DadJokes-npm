import DadJokes from '../';
import axios from 'axios';
import { JokeResponseArray } from '../models/joke';
import { MockJokesArray } from '../__mocks__/jokeByType.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const token = 'token';
const dadjokes = new DadJokes(token);

describe('searchJoke', () => {
  test('return parsed joke data', async () => {
    const data: JokeResponseArray = MockJokesArray;

    mockedAxios.get.mockResolvedValue({ data });

    const jokeData = await dadjokes.searchJoke('frog');

    expect(jokeData).toEqual(data.body);
  });

  test('failure to retrive searchJoke', async () => {
    const errorMessage = 'this is an error';

    mockedAxios.get.mockRejectedValue(errorMessage);

    const jokeData = await dadjokes.searchJoke('joke');

    expect(jokeData).toEqual(errorMessage);
  });
});
