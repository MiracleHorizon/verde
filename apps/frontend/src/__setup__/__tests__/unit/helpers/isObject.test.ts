import { describe, expect, it } from 'vitest'

import { isObject } from '@helpers/isObject'

describe('isObject', () => {
  it('should return true for array', () => {
    expect(isObject([])).toBeTruthy()
    expect(isObject([1, 2, 4])).toBeTruthy()
    expect(isObject(new Array(2))).toBeTruthy()
  })

  it('should return true for default objects', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(Object.create({}, {}))).toBeTruthy()
  })

  it('should return false for null', () => {
    expect(isObject(null)).toBeFalsy()
  })

  it('should return false for primitives', () => {
    expect(isObject(1)).toBeFalsy()
    expect(isObject('string')).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject(true)).toBeFalsy()
    expect(isObject(1n)).toBeFalsy()
    expect(isObject(Symbol('symbol'))).toBeFalsy()
  })
})
