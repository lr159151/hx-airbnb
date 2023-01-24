import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import { RoomItemWrapper } from '@/components/room-item/style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

interface IProps {
  children?: ReactNode
  itemData: any
  itemWidth?: string
}

const RoomItem: FC<IProps> = (props) => {
  const { itemData, itemWidth = '25%' } = props
  const sliderRef = useRef<ElementRef<typeof Carousel>>(null)
  function controlClickHandle(isRight = true) {
    isRight ? sliderRef.current!.next() : sliderRef.current!.prev()
  }

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="slider">
          <div className="control">
            <div className="btn prev" onClick={() => controlClickHandle(false)}>
              <IconArrowLeft width={24} height={24} />
            </div>
            <div className="btn next" onClick={() => controlClickHandle()}>
              <IconArrowRight width={24} height={24} />
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {itemData.picture_urls?.map((item: string) => (
              <div className="room-item-cover" key={item}>
                <img src={item} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="desc">
          {itemData?.verify_info?.kicker_badge && (
            <span className="tag">
              {itemData.verify_info.kicker_badge.label}
            </span>
          )}
          <span>{itemData.verify_info.messages.join(' · ')}</span>
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            precision={0.5}
            size="small"
            sx={{
              fontSize: '12px',
              color: '#00848a'
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">· {itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
}

export default memo(RoomItem)
