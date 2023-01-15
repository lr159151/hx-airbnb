import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqualApp
  )

  /** 派发异步事件：发送网络请求 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <h2>{goodPriceInfo.title}</h2>
        <ul>
          {goodPriceInfo.list?.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
