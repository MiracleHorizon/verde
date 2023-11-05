import { useMemo } from 'react'
import { useImageOnLoad } from 'usehooks-ts'

export function useFullSizeImageLoad() {
  const { handleImageOnLoad, css } = useImageOnLoad()

  const style = useMemo(() => ({ ...css.fullSize }), [css.fullSize])

  return { style, handleImageOnLoad }
}
