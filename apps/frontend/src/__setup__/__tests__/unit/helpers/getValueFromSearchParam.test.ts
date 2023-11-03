import { describe, expect, it } from 'vitest'

import { getValueFromSearchParam } from '@helpers/getValueFromSearchParam'

describe('getValueFromSearchParam', () => {
  it('should return a param value from a single-element array', () => {
    expect(getValueFromSearchParam(['foo'])).toBe('foo')
  })

  it('should return a first param value from an array', () => {
    expect(getValueFromSearchParam(['foo', 'bar', 'baz'])).toBe('foo')
  })

  it('should return empty string from an empty array', () => {
    expect(getValueFromSearchParam([])).toBe('')
  })

  it('should return correct value from an string', () => {
    expect(getValueFromSearchParam('foo')).toBe('foo')
    expect(getValueFromSearchParam('bar')).toBe('bar')
    expect(getValueFromSearchParam('baz')).toBe('baz')
  })
})
