import React from 'react'
import './LayoutWebsite.scss'
import { Outlet } from 'react-router-dom'
import { HeaderWebsite, FooterWebsite } from '../../components'

const LayoutWebsite = () => {
  return (
      <div>
          <HeaderWebsite/>
          <Outlet />
          <FooterWebsite/>
      </div>
  )
}

export default LayoutWebsite