import type {
  OpenAICompatibleProvider,
  OpenAICompatibleProviderSettings,
} from '@ai-sdk/openai-compatible';

export interface WallabyProviderSettings
  extends Partial<
    Pick<
      OpenAICompatibleProviderSettings,
      'baseURL' | 'apiKey' | 'headers' | 'queryParams' | 'fetch'
    >
  > {}

export declare function createWallaby(
  options?: WallabyProviderSettings,
): OpenAICompatibleProvider<string, string, string, string>;

export declare const wallaby: OpenAICompatibleProvider<
  string,
  string,
  string,
  string
>;
