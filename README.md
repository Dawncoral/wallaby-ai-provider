# wallaby-ai-provider

[![npm version](https://img.shields.io/npm/v/wallaby-ai-provider)](https://www.npmjs.com/package/wallaby-ai-provider) [![npm downloads](https://img.shields.io/npm/dm/wallaby-ai-provider)](https://www.npmjs.com/package/wallaby-ai-provider) [![license](https://img.shields.io/npm/l/wallaby-ai-provider)](https://github.com/Dawncoral/wallaby-ai-provider/blob/main/LICENSE)

[Wallaby](https://wallabytoken.com) provider for the [Vercel AI SDK](https://ai-sdk.dev) — Kimi K3 over an OpenAI-compatible endpoint, pay-per-token, no subscription.

## Install

```bash
npm install wallaby-ai-provider ai
```

## Usage

```ts
import { generateText } from 'ai';
import { wallaby } from 'wallaby-ai-provider';

const { text } = await generateText({
  model: wallaby('kimi-k3'),
  prompt: 'Hello, world',
});
```

Set your API key (get one at [wallabytoken.com](https://wallabytoken.com)):

```bash
export WALLABY_API_KEY=sk-...
```

## Custom instance

```ts
import { createWallaby } from 'wallaby-ai-provider';

const myWallaby = createWallaby({
  apiKey: 'sk-...', // defaults to process.env.WALLABY_API_KEY
  // baseURL: 'https://api.wallabytoken.com/v1',
});

const model = myWallaby('kimi-k3');
```

## Models

| Model | Context | Max output | Pricing (per 1M tokens, 10% off the official list) |
|---|---|---|---|
| `kimi-k3` | 1,048,576 | 131,072 | $2.70 in / $13.50 out / $0.27 cache hit |

## License

MIT — WALLABY DATA PTY LTD
