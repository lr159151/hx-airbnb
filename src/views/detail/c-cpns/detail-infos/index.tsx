import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { InfosWrapper } from '@/views/detail/c-cpns/detail-infos/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const DetailInfos: FC<IProps> = (props) => {
  const { itemData } = props
  return <InfosWrapper>DetailInfos</InfosWrapper>
}

export default memo(DetailInfos)
