import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CenterWrapper } from '@/components/app-header/c-cpns/header-center/style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from '@/components/app-header/c-cpns/header-center/c-cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles.json'
import SearchSections from '@/components/app-header/c-cpns/header-center/c-cpns/search-sections'

interface IProps {
  children?: ReactNode
}

const HeaderCenter: FC<IProps> = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map((item) => item.title)
  return (
    <CenterWrapper>
      {/*<div className="search-bar">*/}
      {/*  <div className="text">搜索房源和体验</div>*/}
      {/*  <div className="icon">*/}
      {/*    <IconSearchBar />*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
        <div className="infos">
          <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CenterWrapper>
  )
}

export default memo(HeaderCenter)
