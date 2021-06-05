import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import { Joke, JokeResponse, JokeResponseArray } from './models/joke';

class DadJokes {
  config: AxiosRequestConfig;
  axios: AxiosStatic;
  constructor(private RAPIDAPIKEY: string) {
    this.config = {
      headers: {
        'x-rapidapi-key': this.RAPIDAPIKEY,
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      },
    };
    this.axios = axios;
  }

  get authToken(): string {
    return this.RAPIDAPIKEY;
  }

  set authToken(newAuthToken: string) {
    this.RAPIDAPIKEY = newAuthToken;
  }

  async randomJokes(count?: number): Promise<Joke[]> {
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
