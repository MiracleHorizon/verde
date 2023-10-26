import { useOrderSummary } from './useOrderSummary'
import { MIN_ORDER_COST } from '@constants/payment'

export function useOrderCost() {
  const { productsCost, deliveryCost, serviceFee } = useOrderSummary()

  const orderCost = productsCost + deliveryCost + serviceFee

  return {
    orderCost,
    minOrderCostShortage: MIN_ORDER_COST - orderCost,
    isMinOrderCostExceeded: orderCost >= MIN_ORDER_COST
  }
}
