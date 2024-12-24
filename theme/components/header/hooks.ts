''

import { useEffect } from 'react'

import { useSetHeaderShouldShowBg } from './internal/hooks.ts'

export const useHideHeaderBgInRoute = () => {
  const setter = useSetHeaderShouldShowBg()
  useEffect(() => {
    setter(false)
    return () => {
      setter(true)
    }
  }, [])
}

export const HeaderHideBg = () => {
  useHideHeaderBgInRoute()
  return null
}

export { useSetHeaderMetaInfo } from './internal/hooks'
