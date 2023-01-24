import styled from 'styled-components'

interface IRoomItemStyle {
  verifyColor: string
  itemWidth: string
  contentWidth: number
}
export const RoomItemWrapper = styled.div<IRoomItemStyle>`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${(props) => props.itemWidth};
  padding: 8px 8px 12px;

  .inner {
    width: 100%;
  }

  .room-item-cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.15) 100%
        );

        &.next {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }

    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${(props) => props.contentWidth}%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;

          &.more {
            transform: scale(0.666667);
            opacity: 0.875;
          }

          &.active {
            width: 8px;
            height: 8px;
            transform: scale(1);
            background-color: #fff;
          }
        }
      }
    }
  }

  .desc {
    margin: 8px 0 5px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    color: ${(props) => props.verifyColor};

    .tag {
      display: inline-block;
      margin-right: 4px;
      padding: 0 4px;
      color: #fff;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: normal;
      text-transform: uppercase;
      white-space: nowrap;
      border-radius: 3.2px;
      background-color: ${(props) => props.verifyColor};
    }
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`
