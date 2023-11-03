import { describe, expect, it, vi } from 'vitest'

import {
  calcDeliveryCostByDaytime,
  DAY_DELIVERY_COST,
  EVENING_DELIVERY_COST,
  MORNING_DELIVERY_COST,
  NIGHT_DELIVERY_COST
} from '@helpers/calcDeliveryCostByDaytime'

describe('calcDeliveryCostByDaytime', () => {
  it(`should return ${MORNING_DELIVERY_COST} for morning delivery`, () => {
    const morningDate = new Date('2023-10-26T08:00:00')

    vi.useFakeTimers().setSystemTime(morningDate)

    expect(calcDeliveryCostByDaytime()).toBe(MORNING_DELIVERY_COST)
  })

  it(`should return ${DAY_DELIVERY_COST} for daytime delivery`, () => {
    const dayDate = new Date('2023-10-26T15:00:00')

    vi.useFakeTimers().setSystemTime(dayDate)

    expect(calcDeliveryCostByDaytime()).toBe(DAY_DELIVERY_COST)
  })

  it(`should return ${EVENING_DELIVERY_COST} for evening delivery`, () => {
    const eveningDate = new Date('2023-10-26T20:00:00')

    vi.useFakeTimers().setSystemTime(eveningDate)

    expect(calcDeliveryCostByDaytime()).toBe(EVENING_DELIVERY_COST)
  })

  it(`should return ${NIGHT_DELIVERY_COST} for nighttime delivery`, () => {
    const nightDate = new Date('2023-10-26T03:00:00')

    vi.useFakeTimers().setSystemTime(nightDate)

    expect(calcDeliveryCostByDaytime()).toBe(NIGHT_DELIVERY_COST)
  })
})
