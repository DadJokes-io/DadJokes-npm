import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import { Joke, JokeResponse, JokeResponseArray } from './models/joke';

class DadJokes {
  config: AxiosRequestConfig;
  axios: AxiosStatic;
  constructor(private rapidapi_key: string) {
    this.config = {
      headers: {
        'x-rapidapi-key': this.rapidapi_key,
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      },
    };
    this.axios = axios;
  }

  get authToken(): string {
    return this.rapidapi_key;
  }

  set authToken(newAuthToken: string) {
    this.rapidapi_key = newAuthToken;
  }

  async randomJokes(count?: number): Promise<Joke[]> {
    if (count && count > 5) {
      console.warn('Count limit for random jokes is 5');
    }

    try {
      const response: AxiosResponse<JokeResponseArray> = await this.axios.get(
        `https://dad-jokes.p.rapidapi.com/random/joke?count=${count || 1}`,
        this.config,
      );

      return response.data.body;
    } catch (error) {
      return error;
    }
  }

  async jokeById(_id: string): Promise<Joke> {
    try {
      const response: AxiosResponse<JokeResponse> = await this.axios.get(
        `https://dad-jokes.p.rapidapi.com/joke/${_id}`,
        this.config,
      );

      return response.data.body;
    } catch (error) {
      return error;
    }
  }

  async jokeByType(type: string, limit?: number): Promise<Joke[]> {
    try {
      const response: AxiosResponse<JokeResponseArray> = await this.axios.get(
        `https://dad-jokes.p.rapidapi.com/joke/type/${type}?limit=${limit || 50}`,
        this.config,
      );

      return response.data.body;
    } catch (error) {
      return error;
    }
  }

  async searchJoke(term: string): Promise<Joke[]> {
    try {
      const response: AxiosResponse<JokeResponseArray> = await this.axios.get(
        `https://dad-jokes.p.rapidapi.com/joke/search?term=${term}`,
        this.config,
      );

      return response.data.body;
    } catch (error) {
      return error;
    }
  }
}

export default DadJokes;
