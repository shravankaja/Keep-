import React, { Component } from "react"
import Logos from '../Components/logos'
import '../SignInPage.css'
import Paragraphs from '../Components/Paragraphs'
import TextFields from '../Components/TextFields'
import Button from '@material-ui/core/Button';
import Links from '../Components/Links'
import { signIn } from '../Services/UserServices'

import { Link } from "react-router-dom"

import BasicTextFields from '../Components/BasicTextFields'
const passwordRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patternPassword: passwordRegex,
            patternEmail: emailRegex,
            emailStatus: "",
            passStatus: "",
            email: "",
            passowrd: ""
        }

    }

    receiveFromChild(value, type, value1) {

        if (value == false) {

            if (type == "e") {
                this.setState({ emailStatus: "Follow Email Format" })
            }
            else if (type == "p") {
                this.setState({ passStatus: "Follow  Password Format" })
            }
        }
        else if (value == true) {
            if (type == "e") {

                this.setState({ emailStatus: "", email: value1 })
                console.log("email", value1)
            }
            else if (type == "p") {

                this.setState({ passStatus: "", passowrd: value1 })
                console.log("password", value1)
            }
        }
    }



    submitData = () => {
        let obj = {
            email: this.state.email,
            password: this.state.passowrd
        }
        console.log(obj)

        signIn(obj).then(resp => {
            console.log(resp)
            this.props.history.push('/D')
            console.log(this.props)
            alert("logged in")

        })
    }

    render() {
        return (
            <div id="mainContainer">
                <div id="logos">
                    <Logos sheildID="shiledInSignInPage" />
                </div>
                <div id="mainHeding">
                    <h3 id="signInHeading">Sign In</h3>
                </div>
                <div id="subheading">
                    <Paragraphs content="Use your Google Account" />
                </div>
                <div id="form">
                    <TextFields  nameOfField="Email" pattern={this.state.patternEmail} controlParent={this.receiveFromChild.bind(this)} />
                    <p class="errorStatusE">{this.state.emailStatus}</p>
                    <TextFields nameOfField="Password" pattern={this.state.patternPassword} type="password" controlParent={this.receiveFromChild.bind(this)} />
                    <p class="errorStatusP">{this.state.passStatus}</p>
                </div>
                <div id="buttonAndLink">
                    <div id="link" onClick={() => { this.props.history.push('/SignUp') }}>
                        Creat Account
            </div>
                    <div id="button" >
                        <Button variant="contained" onClick={this.submitData} color="primary" class={this.props.next}>
                            Next
        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;