import DadJokes from '../';
import axios from 'axios';
import { JokeResponse } from '../models/joke';
import { MockJoke } from '../__mocks__/jokeById.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const token = 'token';
const dadjokes = new DadJokes(token);
const id = '5f80ccd641785ba7c7d27cb3';

describe('jokeById', () => {
  test('return parsed joke data', async () => {
    const data: JokeResponse = MockJoke;

    mockedAxios.get.mockResolvedValue({ data });

    const jokeData = await dadjokes.jokeById(id);

    expect(jokeData._id).toEqual(data.body._id);
  });

  test('failure to retrive jokeById', async () => {
    const errorMessage = 'this is an error';

    mockedAxios.get.mockRejectedValue(errorMessage);

    const jokeData = await dadjokes.jokeById(id);

    expect(jokeData).toEqual(errorMessage);
  });
});
