import React from 'react'
import "../../dist/css/Dashboard.css"
import ReportSidebar from '../Report-Sidebar/ReportSidebar.js';
//import NavBar from "../NavBar/NavBar"
function Dashboard()
{
    return (
        <div className='container'>
            <ReportSidebar />
        </div>
        
    )
}

export default Dashboard