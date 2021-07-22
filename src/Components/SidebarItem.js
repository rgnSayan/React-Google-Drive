import React from 'react'
import './SidebarItem.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

function SidebarItem({ arrow, label, Icon }) {
    return (
        <div className="sidebarItem">
            <div className="sidebarItem__arrow">
                {arrow && <ArrowRightIcon />}
            </div>
            <div className="sidebarItem__main">
                <Icon />
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem
