import slugify from 'slugify'
import type { ParsedToken, ParsedTokens } from './util-types'

const tokensParse = (tokens: ParsedTokens) => {
  const nameSlug = (text: string): string => slugify(text, { lower: true })
  const response: ParsedToken = {}

  tokens.forEach(({ name, value }) => {
    response[nameSlug(name as string) as keyof ParsedToken] = value
  })
  return response
}

export default tokensParse
