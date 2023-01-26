import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { AppHeaderWrapper } from '@/components/app-header/style'
import HeaderLeft from '@/components/app-header/c-cpns/header-left'
import HeaderCenter from '@/components/app-header/c-cpns/header-center'
import HeaderRight from '@/components/app-header/c-cpns/header-right'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { headerConfig } = useAppSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqualApp
  )
  const { isFix } = headerConfig
  return (
    <AppHeaderWrapper className={classNames({ fixed: isFix })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
