import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import tokens from './src/styles/design-tokens.json'

import clamp from './src/styles/css-utils/clamp-generator'
import parse from './src/styles/css-utils/token-parser'

const colors = parse(tokens.colors.items)
const fontFamily = parse(tokens.fonts.items)
const spacing = parse(clamp(tokens.spacing.items))
const fontSize = parse(clamp(tokens.fontSizes.items))

export default defineConfig({
  theme: {
    colors,
    spacing,
    fontSize,
    fontFamily,
  },
  shortcuts: [
  ],
  presets: [
    presetIcons(),
  ],
  rules: [
    [/^SiO2-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
    [/^SiO2-width-(.*)$/, ([, c], { theme }) => {
      if (theme.spacing[c])
        return { width: theme.spacing[c] }
    }],
    [/^UnoRoot$/, ([,], { theme }) => {
      let result = ''

      const groups = [
        { key: 'colors', prefix: 'color' },
        { key: 'spacing', prefix: 'space' },
        { key: 'fontSize', prefix: 'size' },
        { key: 'fontFamily', prefix: 'font' },
      ]

      groups.forEach(({ key, prefix }) => {
        // @ts-expect-error Theme type not defined
        const group = theme[key]
        if (!group)
          return

        Object.keys(group).forEach((key) => {
          result += `--${prefix}-${key}: ${group[key]};`
        })
      })

      return result
    }],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
