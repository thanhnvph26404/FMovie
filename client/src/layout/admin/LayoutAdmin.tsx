import React from 'react'
import './LayoutAdmin.scss'
import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../../components'

const LayoutAdmin = () => {
  return (
      <div>
          <HeaderAdmin/>
          <Outlet />
      </div>
  )
}

export default LayoutAdmin