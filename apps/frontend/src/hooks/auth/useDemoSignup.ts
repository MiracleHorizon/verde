'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { createUser } from '@helpers/createUser'
import { createUserOrder } from '@helpers/createUserOrder'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import { SERVICE_FEE } from '@constants/payment'
import { Route } from '@enums/Route'
import type { UserOrder } from '@interfaces/user/UserOrder'
import type { CreatUserOrderDto } from '@interfaces/user/CreatUserOrderDto'

const mockOrdersDto: Omit<CreatUserOrderDto, 'userId' | 'serviceFee'>[] = [
  {
    totalCost: 1143,
    deliveryCost: 399,
    productsCost: 695,
    products: [
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h2w9a000208l9es3s5q93',
        title: 'Брокколи',
        fullPrice: 158,
        imagePath:
          'https://verde-serve-static-dyu0.onrender.com/images/broccoli-1024x640.png',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Виноград Кишмиш, без косточки',
        fullPrice: 208,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/2794391/4033c417a3c2350dd9bb3a3c277fda14/400x400nocrop',
        discountPercentage: 12,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Авокадо Хасс',
        fullPrice: 210,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3483997/6c39fba3e543b740c49ccbcc420a2d5d/orig',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Гранат Израиль',
        fullPrice: 143,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3807432/2f37ff7c1fb77d0872d32c17c57dce17/400x400nocrop',
        discountPercentage: 0,
        quantity: 1
      }
    ]
  },
  {
    totalCost: 1391,
    deliveryCost: 0,
    productsCost: 1342,
    products: [
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h2w9a000208l9es3s5q93',
        title: 'Брокколи',
        fullPrice: 158,
        imagePath:
          'https://verde-serve-static-dyu0.onrender.com/images/broccoli-1024x640.png',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo1164kh000e08l9gntq9dag',
        title: 'Салат с лососем',
        fullPrice: 387,
        imagePath:
          'https://verde-serve-static-dyu0.onrender.com/images/salmon-salad-1024x640.png',
        discountPercentage: 0,
        quantity: 2
      },

      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo1164kh000e08l9gntq9dag',
        title: 'Салат "Цезарь"',
        fullPrice: 260,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3596693/0fc292595b11f00ac4bf4658cda641b2/400x400nocrop',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Гранат Израиль',
        fullPrice: 143,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3807432/2f37ff7c1fb77d0872d32c17c57dce17/400x400nocrop',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Авокадо Хасс',
        fullPrice: 210,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3483997/6c39fba3e543b740c49ccbcc420a2d5d/orig',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Виноград Кишмиш, без косточки',
        fullPrice: 208,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/2794391/4033c417a3c2350dd9bb3a3c277fda14/400x400nocrop',
        discountPercentage: 12,
        quantity: 1
      }
    ]
  },
  {
    totalCost: 3101,
    deliveryCost: 0,
    productsCost: 3052,
    products: [
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h2w9a000208l9es3s5q93',
        title: 'Брокколи',
        fullPrice: 158,
        imagePath:
          'https://verde-serve-static-dyu0.onrender.com/images/broccoli-1024x640.png',
        discountPercentage: 0,
        quantity: 3
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Авокадо Хасс',
        fullPrice: 210,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3483997/6c39fba3e543b740c49ccbcc420a2d5d/orig',
        discountPercentage: 0,
        quantity: 4
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo0h3460000408l97cyr4ntq',
        title: 'Виноград Кишмиш, без косточки',
        fullPrice: 208,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/2794391/4033c417a3c2350dd9bb3a3c277fda14/400x400nocrop',
        discountPercentage: 12,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo1164kh000e08l9gntq9dag',
        title: 'Салат с лососем',
        fullPrice: 387,
        imagePath:
          'https://verde-serve-static-dyu0.onrender.com/images/salmon-salad-1024x640.png',
        discountPercentage: 0,
        quantity: 1
      },
      {
        id: crypto.randomUUID(),
        subcategoryId: 'clo1164kh000e08l9gntq9dag',
        title: 'Салат "Цезарь"',
        fullPrice: 260,
        imagePath:
          'https://avatars.mds.yandex.net/get-eda/3596693/0fc292595b11f00ac4bf4658cda641b2/400x400nocrop',
        discountPercentage: 0,
        quantity: 3
      }
    ]
  }
]

export function useDemoSignup() {
  const signin = useUserStore(state => state.signin)
  const initializeUserCart = useCartStore(state => state.initialize)

  const router = useRouter()

  const handleDemoSignup = useCallback(() => {
    const localStorageProvider = new BrowserStorageProvider(localStorage)

    const { user, userCart } = createUser({
      name: 'Пользователь',
      email: 'demo_user@demo.com',
      password: 'SomeSTRONG40_password1'
    })

    const orders: UserOrder[] = mockOrdersDto
      .map(payload =>
        createUserOrder({
          userId: user.id,
          serviceFee: SERVICE_FEE,
          ...payload
        })
      )
      .map(order => ({
        ...order,
        deliveredAt: order.createdAt
      }))

    localStorageProvider.set(USER_ORDERS_KEY, orders)

    signin(user)
    initializeUserCart(userCart)

    router.replace(Route.HOME)
  }, [signin, initializeUserCart, router])

  return { handleDemoSignup }
}
