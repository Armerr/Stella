''

import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect'
import React from 'react'
import ReactDOM from 'react-dom'

export const Global = () => {
  useIsomorphicLayoutEffect(() => {
    Object.assign(window, {
      React,
      ReactDOM,
      react: React,
      reactDom: ReactDOM,
    })
  }, [])
  return null
}
