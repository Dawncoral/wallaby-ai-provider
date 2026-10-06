import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const DEFAULT_BASE_URL = 'https://api.wallabytoken.com/v1';

function envApiKey() {
  return typeof process !== 'undefined' && process.env
    ? process.env.WALLABY_API_KEY
    : undefined;
}

/**
 * Create a Wallaby provider instance.
 *
 * @param {object} [options]
 * @param {string} [options.apiKey] - Wallaby API key. Defaults to the
 *   WALLABY_API_KEY environment variable.
 * @param {string} [options.baseURL] - Defaults to https://api.wallabytoken.com/v1
 * @param {Record<string, string>} [options.headers] - Extra request headers.
 * @param {Record<string, string>} [options.queryParams] - Extra query params.
 * @param {typeof fetch} [options.fetch] - Custom fetch implementation.
 */
export function createWallaby(options = {}) {
  const { apiKey = envApiKey(), baseURL = DEFAULT_BASE_URL, ...rest } = options;
  return createOpenAICompatible({ name: 'wallaby', baseURL, apiKey, ...rest });
}

/**
 * Default Wallaby provider instance. Reads WALLABY_API_KEY from the
 * environment at import time; use createWallaby({ apiKey }) to pass a key
 * explicitly.
 */
export const wallaby = createWallaby();
