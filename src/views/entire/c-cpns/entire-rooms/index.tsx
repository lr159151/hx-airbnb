import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RoomsWrapper } from '@/views/entire/c-cpns/entire-rooms/style'
import { useAppSelector } from '@/store'
import RoomItem from '@/components/room-item'

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = () => {
  const { roomList, totalCount } = useAppSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }))
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="list">
        {roomList!.map((item) => (
          <RoomItem itemData={item} itemWidth="20%" key={item.id} />
        ))}
      </div>
    </RoomsWrapper>
  )
}

export default memo(EntireRooms)
