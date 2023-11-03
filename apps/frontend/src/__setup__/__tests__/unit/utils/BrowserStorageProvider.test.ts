// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from 'vitest'

import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'

const createTests = (
  storageName: 'localStorage' | 'sessionStorage',
  storage: Storage,
  provider: BrowserStorageProvider
): void => {
  const KEY = 'foo'
  const stringItem = 'foo'
  const objectItem = { bar: 'baz' }
  const objectItemJson = JSON.stringify(objectItem)
  const arrayItem = ['foo', 'bar', 'baz']
  const arrayItemJson = JSON.stringify(arrayItem)
  const multiplyItems = [
    { key: 'foo', value: stringItem },
    { key: 'bar', value: objectItem },
    { key: 'baz', value: arrayItem }
  ]

  describe(`BrowserStorageProvider (${storageName})`, () => {
    beforeEach(() => {
      expect(storage).toBeDefined()
      storage.clear()
    })

    it(`should set item to the ${storageName}`, () => {
      provider.set(KEY, stringItem)
      expect(storage.getItem(KEY)).toBe(stringItem)

      provider.set(KEY, objectItem)
      expect(storage.getItem(KEY)).toBe(objectItemJson)

      provider.set(KEY, arrayItem)
      expect(storage.getItem(KEY)).toBe(arrayItemJson)
    })

    it(`should set multiply items to the ${storageName}`, () => {
      expect(storage.length).toBe(0)

      provider.setMultiply(multiplyItems)
      expect(storage.length).toBe(multiplyItems.length)
      expect(provider.get(multiplyItems[0].key)).toStrictEqual(
        multiplyItems[0].value
      )
      expect(provider.get(multiplyItems[1].key)).toStrictEqual(
        multiplyItems[1].value
      )
    })

    it(`should get item from the ${storageName}`, () => {
      provider.set(KEY, stringItem)
      expect(storage[KEY]).toBe(stringItem)
      expect(provider.get(KEY)).toBe(stringItem)

      provider.set(KEY, objectItem)
      expect(storage[KEY]).toBe(objectItemJson)
      expect(provider.get(KEY)).toStrictEqual(objectItem)

      provider.set(KEY, arrayItem)
      expect(storage[KEY]).toBe(arrayItemJson)
      expect(provider.get(KEY)).toStrictEqual(arrayItem)

      expect(storage['empty_value']).toBeUndefined()
      expect(provider.get('empty_value')).toBeNull()
    })

    it(`should remove item from the ${storageName}`, () => {
      provider.set(KEY, stringItem)
      expect(storage[KEY]).toBe(stringItem)

      provider.remove(KEY)
      expect(storage[KEY]).not.toBeDefined()

      provider.set(KEY, objectItem)
      expect(storage[KEY]).toBe(objectItemJson)

      provider.remove(KEY)
      expect(storage[KEY]).not.toBeDefined()
    })

    it(`should remove multiply items from the ${storageName}`, () => {
      expect(storage.length).toBe(0)

      provider.setMultiply(multiplyItems)
      expect(storage.length).toBe(multiplyItems.length)

      provider.removeMultiply(multiplyItems.map(({ key }) => key))
      expect(storage.length).toBe(0)
    })

    it(`should clear the ${storageName}`, () => {
      provider.set(KEY, stringItem)
      expect(storage[KEY]).toBe(stringItem)
      expect(provider.length).toBe(1)

      provider.clear()
      expect(provider.length).toBe(0)
    })
  })
}

createTests(
  'localStorage',
  localStorage,
  new BrowserStorageProvider(localStorage)
)
createTests(
  'sessionStorage',
  sessionStorage,
  new BrowserStorageProvider(sessionStorage)
)
