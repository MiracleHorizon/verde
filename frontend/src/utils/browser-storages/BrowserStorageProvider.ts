import { isObject } from '@helpers/isObject.ts'

interface StorageItem {
  key: string
  value: NonNullable<unknown>
}

export abstract class BrowserStorageProvider {
  public get length(): number {
    return this.storage.length
  }

  /* eslint no-unused-vars: 0 */
  protected constructor(private readonly storage: Storage) {}

  public set<T extends NonNullable<unknown>>(key: string, payload: T): void {
    const value = isObject(payload)
      ? JSON.stringify(payload)
      : payload.toString()
    this.storage.setItem(key, value)
  }

  public setMultiply(data: StorageItem[]): void {
    data.forEach(({ key, value }) => this.set(key, value))
  }

  /* @ts-expect-error: noImplicitReturns */
  public get<T>(key: string): T | null {
    const item = this.storage.getItem(key)

    if (!item) {
      return null
    }

    try {
      return JSON.parse(item) as T
    } catch (error) {
      if (error instanceof SyntaxError) {
        return item as T
      }
    }
  }

  public remove(key: string): void {
    this.storage.removeItem(key)
  }

  public clear(): void {
    this.storage.clear()
  }
}
