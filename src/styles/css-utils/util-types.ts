import type tokens from '../design-tokens.json'

export declare type MasterToken = typeof tokens

export declare type ColorTokens = typeof tokens.colors.items
export declare type SpacingTokens = typeof tokens.fontSizes.items
export declare type SizingTokens = typeof tokens.fonts.items
export type Viewports = typeof tokens.viewports

export type ParsedToken = Record<string | symbol, string | string[]>

export declare type ParsedTokens = ParsedToken[]

export declare type TokenItem = typeof tokens.colors.items[0]
