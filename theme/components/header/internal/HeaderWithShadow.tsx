''

import clsx from 'clsx'


export const HeaderWithShadow: Component = ({ children }) => {
  return (
    <header
      data-hide-print
      className={clsx(
        'fixed inset-x-0 top-0 z-[9] mr-[var(--removed-body-scroll-bar-size)] h-[4.5rem] overflow-hidden transition-shadow duration-200',
        100 &&
          'shadow-none shadow-neutral-100 dark:shadow-neutral-800/50 lg:shadow-sm',
      )}
    >
      {children}
    </header>
  )
}
