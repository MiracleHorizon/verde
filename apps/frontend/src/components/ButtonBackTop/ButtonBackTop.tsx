'use client'

import { useCallback, useState } from 'react'
import {
  AnimatePresence,
  type AnimationProps,
  LazyMotion,
  m,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'

import { IconChevronDoubleUp } from '@ui/icons/IconChevronDoubleUp'
import styles from './ButtonBackTop.module.scss'

const features = () =>
  import('@libs/framer-motion/features/domAnimation').then(mod => mod.default)

export const animation: AnimationProps = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1
  },
  exit: {
    scale: 0.4,
    opacity: 0
  },
  transition: {
    type: 'spring',
    stiffness: 320,
    damping: 30
  }
}

const VISIBILITY_THRESHOLD = 400 // NOTE: Pixels
const calcIsVisible = (scrollProgress: number): boolean =>
  scrollProgress >= VISIBILITY_THRESHOLD

export default function ButtonBackTop() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(calcIsVisible(scrollY.get()))

  const handleBackTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  useMotionValueEvent(
    scrollY,
    'change',
    useCallback((latest: number) => setIsVisible(calcIsVisible(latest)), [])
  )

  return (
    <LazyMotion features={features}>
      <AnimatePresence>
        {isVisible && (
          <m.button
            {...animation}
            className={styles.root}
            onClick={handleBackTop}
          >
            <IconChevronDoubleUp className={styles.icon} />
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
