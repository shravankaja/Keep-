import React from 'react'
import '../DashBoardHeader.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "material-ui-search-bar";
import RefreshIcon from '@material-ui/icons/Refresh';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    const [headerDetails, setHeader] = React.useState({ wholeHeaderId: "header", mainHeading: "Keep", keeplogo: true , sarchBarBack : "#E8E8E8",

refreshDisplay : true, listViewDisplay : true 


})
    return (
        <>
        <div id={headerDetails.wholeHeaderId}>
            <div id="buttonAndMainHeading">
                <div id="navbarButton">
                    <div id = "navbarButtonBorder">
                    <MenuIcon fontSize="medium" />
                    </div>
                </div>
                <div id="pageHeading">
                    <div id="logo">
                        {headerDetails.keeplogo ? <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img>
                            : ""}
                    </div>
                    <p>{headerDetails.mainHeading}</p>
                </div>
            </div>
            <div id="searchBox">
              <SearchBar
                 id ="boxSearch" style = {{background : headerDetails.sarchBarBack , borderRadius : "10px"}}
                /> 
            </div>
            <div id="icons">
                <div class = "iconContainer" id="ri">
                {headerDetails.refreshDisplay ? <RefreshIcon /> : ""}
                </div>
                <div class = "iconContainer" id = "rl">
                <FormatListBulletedSharpIcon />
                </div>
                <div class = "iconContainer" id = "rs"> 
                <SettingsSharpIcon  style = {{color : "grey"}}/>
                </div>
            </div>
            <div id="accoutlogo">

                <div id = "appIconContainer" class = "accountContainers">
                <AppsIcon />
                </div>
                <div id = "accountIcon" class = "accountContainers">
                <div id = "account">S</div>
                </div>
            </div>
        </div>
</>
    )
}

export default Header;  