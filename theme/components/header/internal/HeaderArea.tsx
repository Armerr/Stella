'use client'

import { OnlyDesktop } from '../../ui/viewport'
import { clsxm } from '../../../lib/helper'

import './grid.module.css'

export const HeaderLogoArea: Component = ({ children }) => (
  <div className={clsxm('relative', 'header--grid__logo')}>
    <div
      className={clsxm('relative flex size-full items-center justify-center')}
    >
      {children}
    </div>
  </div>
)

export const HeaderLeftButtonArea: Component = ({ children }) => (
  <div
    className={clsxm(
      'relative flex size-full items-center justify-center lg:hidden',
    )}
  >
    {children}
  </div>
)

export const HeaderCenterArea: Component = ({ children }) => (
  <OnlyDesktop>
    <div className="flex min-w-0 grow">
      <div className="relative flex grow items-center justify-center">
        {children}
      </div>
    </div>
  </OnlyDesktop>
)
