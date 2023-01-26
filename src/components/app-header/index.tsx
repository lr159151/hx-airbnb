import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import {
  AppHeaderWrapper,
  SearchAreaWrapper
} from '@/components/app-header/style'
import HeaderLeft from '@/components/app-header/c-cpns/header-left'
import HeaderCenter from '@/components/app-header/c-cpns/header-center'
import HeaderRight from '@/components/app-header/c-cpns/header-right'
import { shallowEqualApp, useAppSelector } from '@/store'
import { useScrollPosition } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const [isSearch, setIsSearch] = useState(false)
  const prevY = useRef(0)
  /** 从redux中获取数据 */
  const { headerConfig } = useAppSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqualApp
  )
  const { isFix } = headerConfig
  const { scrollY } = useScrollPosition()
  if (!isSearch) prevY.current = scrollY
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  return (
    <AppHeaderWrapper className={classNames({ fixed: isFix })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={() => setIsSearch(true)}
          />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch} />
      </div>
      {isSearch && (
        <div className="cover" onClick={() => setIsSearch(false)}></div>
      )}
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
