import React , {Component} from 'react'
import BasicTextFields from '../Components/BasicTextFields'
import '../formContainer.css'
import Logos from '../Components/logos'
import Links from '../Components/Links'
import Paragraphs from '../Components/Paragraphs'
import {Link} from 'react-router-dom'
 

class LoginPage extends Component {
    render() {
        return (
            <div id = "formContainer">
                <div id = "headingAndSubheadding">
                    <div id = "mainHeading">
                        <h3 id = "createAccount">Create your Google Account</h3>
                    </div>
                    <div id = "subHeading">
                        <h5>to continue to Google</h5>
                    </div>
                </div>
            <div id = "formAndImg">
            <div id = "form">
            <BasicTextFields />
            </div>
            <div id ="shieldlogo" >
               
            <Logos shieldID = "shield" googleLogo = "l5Lhkf"/>
            <div id = "logoDesc">
            <Paragraphs content = "One Account. All of Google working for you." para ="logoDesc"/>
            </div>
            </div>
            </div>
            <div id = "signin">
                <Link to = "/a" >Sign In Instead</Link>
            </div>
           </div>
        )
    }
}

export default LoginPage;