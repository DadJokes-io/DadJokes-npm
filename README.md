# DadJokes
[![Coverage Status](https://coveralls.io/repos/github/DadJokes-io/DadJokes-npm/badge.svg?branch=master)](https://coveralls.io/github/DadJokes-io/DadJokes-npm?branch=master)
![Release](https://github.com/DadJokes-io/DadJokes-npm/workflows/Release/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://www.typescriptlang.org/)
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