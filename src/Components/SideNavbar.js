import { debounce, Icon } from '@material-ui/core'
import React from 'react'
import '../SideNavBar.css'
import notesIcon from '../assets/images/notesIcon.svg'
import remainderIcon from '../assets/remainderIcon.svg'
import editlabelIcon from '../assets/images/editlabelIcon.svg'
import archiveIcon from '../assets/images/archiveIcon.svg'
import trashIcon from '../assets/images/trashIcon.svg'
import labelsIcon from '../assets/images/labelsIcon.svg'



class SideNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                clicked:false,
                clickedr : false,
                clickedsl : false,
                clickeded : false,
                clickeda : false,
                clickedt : false,
                backgroundColor : "white",
                backgroundColorn : "white",
                backgroundColorsl : "white",
                backgroundColored : "white",
                backgroundColora : "white",
                backgroundColort : "white"
        }
    }

    setTitle = function(e) {
       console.log(e)
        
    }
    

    render() {
        return (
            <>
                <div id="sideNav">
                    <div class="iconAndDesc"  onClick = {()=> {this.setState({ clickedt : false,clicked : true , clickeda : false,clickeded : false, clickedsl :false , clickedr :false , backgroundColorn :"#feefc3"}) ; this.setTitle("notes"); }}
                       id={this.state.clicked ? "notesColumn" : "notesColumn1"}  onMouseLeave = {() => this.setState({backgroundColorn : "white"})} 
                       onMouseEnter = {() => this.setState({backgroundColorn : "#feefc3"})}
                       style = {{
                           backgroundColor : this.state.backgroundColorn
                       }}>

                        <div className = {this.state.clicked ? "nIcon" : "nIcon1"} >
                            <img src={notesIcon} ></img>
                        </div>

                        <div class="iconDesc">Notes</div>

                    </div>
                    <div class="iconAndDesc"  onClick = {()=>{ this.setState({clickedt : false ,clickedr : true, clickeda : false,clickeded : false, clickedsl : false,clicked : false, backgroundColor :"#feefc3"}); this.setTitle("remainder")}}    id={this.state.clickedr? "rColumn" : "rColumn1"} onMouseLeave = {() => this.setState({backgroundColor : "white"})} 
                    onMouseEnter = {() => this.setState({backgroundColor : "#feefc3"})}
                    style = {{
                        backgroundColor : this.state.backgroundColor
                    }}>
                    
                        <div className = {this.state.clickedr ? "rIcon" : "rIcon1"}>
                            <img src={remainderIcon}></img>
                        </div>
                        

                        <div class="iconDesc">Remainder</div>

                    </div>
                    <div class="iconAndDesc"  onClick = {()=>{ this.setState({clickedt : false ,clicked : false , clickeda : false,clickeded : false,clickedr :false, clickedsl : true , backgroundColorsl :"#feefc3"}); this.setTitle('State label')}}
                       id={this.state.clicked ? "slColumn" : "slColumn1"} onMouseLeave = {() => this.setState({backgroundColorsl : "white"})} 
                       onMouseEnter = {() => this.setState({backgroundColorsl : "#feefc3"})}
                       style = {{
                           backgroundColor : this.state.backgroundColorsl
                       }}>

                        <div className = {this.state.clickedsl ? "slIcon" : "slIcon1"}>
                            <img src={labelsIcon}></img>
                        </div>

                        <div class="iconDesc">State Label</div>

                    </div>
                    <div class="iconAndDesc" onClick = {()=> {this.setState({clickedt : false,clicked : false ,clickeded : true,clickeda : false , clickedr :false, clickedsl : false , backgroundColored :"#feefc3"}); this.setTitle('Edit Label') }}
                       id={this.state.clicked ? "edColumn" : "edColumn1"} onMouseLeave = {() => this.setState({backgroundColored : "white"})} 
                       onMouseEnter = {() => this.setState({backgroundColored : "#feefc3"})}
                       style = {{
                           backgroundColor : this.state.backgroundColored
                       }}>

                        <div className={this.state.clickeded ? "edIcon" : "edIcon1"}>
                            <img src={editlabelIcon}></img>
                        </div>

                        <div class="iconDesc">Edit Labels</div>

                    </div>
                    <div class="iconAndDesc" onClick = {()=>{ this.setState({ clickedt : false,clicked : false, clickeda : true,clickeded : false, clickedr :false, clickedsl : false , backgroundColora:"#feefc3"});  this.setTitle('Archive')} }
                       id={this.state.clicked ? "edColumn" : "edColumn1"} onMouseLeave = {() => this.setState({backgroundColora : "white"})} 
                       onMouseEnter = {() => this.setState({backgroundColora : "#feefc3"})}
                       style = {{
                           backgroundColor : this.state.backgroundColora
                       }}>

                        <div className= {this.state.clickeda ? "aIcon" : "aIcon1"}>
                            <img src={archiveIcon} ></img>
                        </div>

                        <div class="iconDesc">Archive</div>

                    </div>
                    <div class="iconAndDesc" onClick = {()=> {this.setState({clickedt : true,clicked : false, clickeda : false,clickeded : false, clickedr :false, clickedsl : false , backgroundColort:"#feefc3"}) ;  this.setTitle('Trash')} }
                       id={this.state.clicked ? "edColumn" : "edColumn1"} onMouseLeave = {() => this.setState({backgroundColort : "white"})} 
                       onMouseEnter = {() => this.setState({backgroundColort : "#feefc3"})}
                       style = {{
                           backgroundColor : this.state.backgroundColort
                       }}>

                        <div className={this.state.clickedt ? "tIcon" : "tIcon1"}>
                            <img src={trashIcon}></img>
                        </div>

                        <div class="iconDesc">Trash</div>

                    </div>
                </div>
            </>
        )
    }
}

export default SideNavbar;