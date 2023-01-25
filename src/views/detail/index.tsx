import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailWrapper } from '@/views/detail/style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const Detail: FC<IProps> = () => {
  const { detailInfo } = useAppSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqualApp
  )
  return <DetailWrapper>{detailInfo.name}</DetailWrapper>
}

export default memo(Detail)
