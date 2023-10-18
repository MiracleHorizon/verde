import { BrowserStorageProvider } from './BrowserStorageProvider.ts'

export class LocalStorageProvider extends BrowserStorageProvider {
  constructor() {
    super(localStorage)
  }
}

export const localStorageProvider = new LocalStorageProvider()
