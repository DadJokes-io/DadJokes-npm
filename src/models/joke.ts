export type JokeResponseArray = {
  success: boolean;
  body: Joke[];
};

export type Joke = {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
};

export type JokeResponse = {
  success: boolean;
  body: Joke;
};
