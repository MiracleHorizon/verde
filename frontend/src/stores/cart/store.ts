import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_CART_KEY } from '@constants/browserStorages'
import type { UserCart } from '@interfaces/UserCart'
import type { State, Store } from './types'

const initialState: State<number> = {
  cartId: null,
  products: []
}

export const useCartStore = create(
  devtools<Store<number>>((set, get) => ({
    /* State */
    ...initialState,

    /* Computed */
    isEmpty: () => get().products.length === 0,
    isProductInCart: productId => get().products.some(p => p.id === productId),
    productCount: productId => {
      const product = get().products.find(p => p.id === productId)

      if (!product) {
        return 0
      }

      return product.count
    },

    /* Actions */
    initialize: ({ id: cartId, products }) => set({ cartId, products }),
    deinitialize: () => set(initialState),
    clear: () => set({ products: initialState.products }),
    updateProducts: products => {
      const id = get().cartId

      if (!id) {
        return false
      }

      const localStorageProvider = new BrowserStorageProvider(localStorage)

      localStorageProvider.set<UserCart>(USER_CART_KEY, { id, products })
      set({ products })

      return true
    },

    addProduct: product => {
      set(state => {
        const cartProduct = { ...product, count: 1 }
        const products = [...state.products, cartProduct]
        const successfullyUpdated = get().updateProducts(products)

        if (!successfullyUpdated) {
          return state
        }

        return { products }
      })
    },
    removeProduct: productId => {
      set(state => {
        const products = state.products.filter(p => p.id !== productId)
        const successfullyUpdated = get().updateProducts(products)

        if (!successfullyUpdated) {
          return state
        }

        return { products }
      })
    },

    incrementProductCount: productId => {
      if (get().isEmpty()) return

      const products = get().products

      for (const product of products) {
        if (product.id !== productId) continue

        product.count += 1
        get().updateProducts(products)

        break
      }
    },
    decrementProductCount: productId => {
      if (get().isEmpty()) return

      const products = get().products

      for (const product of products) {
        if (product.id !== productId) continue

        if (product.count === 1) {
          get().removeProduct(product.id)

          break
        }

        product.count -= 1
        get().updateProducts(products)

        break
      }
    }
  }))
)
