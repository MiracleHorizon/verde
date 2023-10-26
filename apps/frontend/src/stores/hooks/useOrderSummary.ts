import { useCartStore } from '@stores/cart'
import { calcDeliveryCostByDaytime } from '@helpers/calcDeliveryCostByDaytime'
import { SERVICE_FEE } from '@constants/payment'

const freeDeliveryThreshold = 999

export function useOrderSummary() {
  const productsCost = useCartStore(state => state.productsCost())
  const deliveryCost = calcDeliveryCostByDaytime()

  return {
    productsCost,
    deliveryCost: productsCost >= freeDeliveryThreshold ? 0 : deliveryCost,
    serviceFee: SERVICE_FEE
  }
}
