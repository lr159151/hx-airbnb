import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: #fff;
    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

type SearchAreaWrapperType = {
  isSearch?: boolean
}
export const SearchAreaWrapper = styled.div<SearchAreaWrapperType>`
  transition: height 250ms ease;
  height: ${(props) => (props.isSearch ? '100px' : '0')};
`
