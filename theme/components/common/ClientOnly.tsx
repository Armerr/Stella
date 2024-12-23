''

import type { ReactNode } from 'react'


export const ClientOnly: Component<{
  fallback?: ReactNode
}> = (props) => {
  const isClient = false
  if (!isClient) return props.fallback ?? null
  return <>{props.children}</>
}

export const withClientOnly =
  <P extends {}>(Component: Component<P>) =>
  (props: P) => (
    <ClientOnly>
      <Component {...props} />
    </ClientOnly>
  )
