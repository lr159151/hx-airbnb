import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app-header'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
    </div>
  )
}

export default memo(App)
