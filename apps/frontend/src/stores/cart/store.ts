import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { USER_CART_KEY } from '@constants/browserStorages'
import type { UserCart } from '@interfaces/user/UserCart'
import type { State, Store } from './types'

type Id = string

const initialState: State<Id> = {
  cartId: null,
  products: []
}

export const useCartStore = create(
  devtools<Store<Id>>((set, get) => ({
    /* State */
    ...initialState,

    /* Computed */
    isEmpty: () => get().products.length === 0,
    isProductInCart: productId => get().products.some(p => p.id === productId),
    productQuantity: productId => {
      const product = get().products.find(p => p.id === productId)

      if (!product) {
        return 0
      }

      return product.quantity
    },
    productsCost: () => {
      if (get().isEmpty()) {
        return 0
      }

      return get().products.reduce((acc, product) => {
        const { fullPrice, discountPercentage, quantity } = product
        const totalCost = calcTotalProductCost(fullPrice, discountPercentage)

        return acc + totalCost * quantity
      }, 0)
    },
    totalPositions: () => get().products.length,

    /* Actions */
    initialize: ({ id: cartId, products }) => set({ cartId, products }),
    deinitialize: () => set(initialState),
    clear: () => {
      const id = get().cartId

      if (!id) return

      const localStorageProvider = new BrowserStorageProvider(localStorage)
      localStorageProvider.set<UserCart>(USER_CART_KEY, { id, products: [] })

      set({ products: initialState.products })
    },
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
        const cartProduct = { ...product, quantity: 1 }
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

    incrementProductQuantity: productId => {
      if (get().isEmpty()) return

      const products = get().products

      for (const product of products) {
        if (product.id !== productId) continue

        product.quantity += 1
        get().updateProducts(products)

        break
      }
    },
    decrementProductQuantity: productId => {
      if (get().isEmpty()) return

      const products = get().products

      for (const product of products) {
        if (product.id !== productId) continue

        if (product.quantity === 1) {
          get().removeProduct(product.id)

          break
        }

        product.quantity -= 1
        get().updateProducts(products)

        break
      }
    }
  }))
)
