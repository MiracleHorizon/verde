import { defineConfig } from 'vitest/config'
import * as path from 'path'

interface Alias {
  find: string | RegExp
  replacementPath: string
}

const createAlias = ({ find, replacementPath }: Alias) => ({
  find,
  replacement: path.resolve(__dirname, replacementPath)
})

const aliases: Alias[] = [
  {
    find: '@utils',
    replacementPath: './src/utils'
  },
  {
    find: '@helpers',
    replacementPath: './src/shared/helpers'
  },
  {
    find: '@constants',
    replacementPath: './src/shared/constants'
  },
  {
    find: '@interfaces',
    replacementPath: './src/shared/interfaces'
  },
  {
    find: '@enums',
    replacementPath: './src/shared/enums'
  }
]

export default defineConfig({
  test: {
    environment: 'node',
    includeSource: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      enabled: true,
      cleanOnRerun: true,
      provider: 'istanbul',
      lines: 100,
      functions: 100,
      reporter: ['html'],
      reportsDirectory: './src/__setup__/__tests__/unit/coverage'
    },
    alias: aliases.map(alias => createAlias(alias))
  }
})
