import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RoomsWrapper } from '@/views/entire/c-cpns/entire-rooms/style'
import { shallowEqualApp, useAppSelector } from '@/store'
import RoomItem from '@/components/room-item'

interface IProps {
  children?: ReactNode
}

const EntireRooms: FC<IProps> = () => {
  const { roomList, totalCount, isLoading } = useAppSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqualApp
  )
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="list">
        {roomList!.map((item) => (
          <RoomItem itemData={item} itemWidth="20%" key={item._id} />
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  )
}

export default memo(EntireRooms)
