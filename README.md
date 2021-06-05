# DadJokes

## What is this?

This is an npm wrapper for the popular [dadjokes api]("https://dadjokes.io"). This wrapper makes it easy to use the dadjokes api with full typecript support

## Installing

---

Using npm:

```
npm install @dadjokes-io/dad-jokes
```

Using yarn:

```
yarn add @dadjokes-io/dad-jokes
```

## Example  
---
## Initialize dadjokes


 **Note** : you must have a [rapid-api-key]("https://docs.rapidapi.com/docs/keys") to use this package and you must subscriped to the [api]("https://rapidapi.com/KegenGuyll/api/dad-jokes")

```ts
import DadJokes from '@dadjokes-io/dad-jokes';

const dadjokes = new DadJokes('raid-api-key');
```
---
## Random Joke
**Note**: all functions from dadjokes are asynchronous

**Optional Params** -- count

```ts
const jokes = await dadjokes.randomJokes(count?:number)
```

## Joke By ID

**Required Params** -- _id
```ts
const jokes = await dadjokes.jokeById(_id:string)
```

## Joke By Type

**Required Params** -- type
**Optional Params** -- limit
```ts
const jokes = await dadjokes.jokeByType(type:string, limit?:number)
```

## Search Joke

**Required Params** -- term
```ts
const jokes = await dadjokes.searchJoke(term:string)
```