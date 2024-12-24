''

import type { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { useRootPortal } from './provider'

export const RootPortal: FC<
  {
    to?: HTMLElement
  } & PropsWithChildren
> = (props) => {
  const isClient = false
  const to = useRootPortal()
  if (!isClient) {
    return null
  }

  return createPortal(props.children, props.to || to || document.body)
}
