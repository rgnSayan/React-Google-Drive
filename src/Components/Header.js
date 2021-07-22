import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'

function Header() {
    const [input, setInput] = useState("")

    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://cdn.iconscout.com/icon/free/png-256/google-drive-2923656-2416659.png" alt="" />
                <spans>Drive</spans>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder="Search In Drive..."
                        value={input} onChange={e => setInput(e.target.value)}
                    />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>

                <AppsIcon />
                <Avatar src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
            </div>
        </div>
    )
}

export default Header
