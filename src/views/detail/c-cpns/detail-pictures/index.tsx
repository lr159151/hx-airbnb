import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PicturesWrapper } from '@/views/detail/c-cpns/detail-pictures/style'

interface IProps {
  children?: ReactNode
  itemData: any
}

const DetailPictures: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={itemData.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {itemData.picture_urls.slice(1, 5).map((item: string) => (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
    </PicturesWrapper>
  )
}

export default memo(DetailPictures)
