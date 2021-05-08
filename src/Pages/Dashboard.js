import React from 'react'
import SideNavBar from '../Components/SideNavbar'
import Header from '../Components/HeaderDashBoard'
import {withRouter} from 'react-router-dom'

function Dashboard() {

    return (
        <>
            <Header />
            <SideNavBar />
        </>
    )
}

export default Dashboard;