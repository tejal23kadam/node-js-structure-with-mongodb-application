import React from 'react'
import EndUserHeader from '../components/EndUserHeader'
import { Outlet } from 'react-router-dom'

function EnduserLayout() {
    return (
        <>
            <EndUserHeader />
            <Outlet />
        </>
    )
}

export default EnduserLayout