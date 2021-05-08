import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../TextFields.css'
import Checkbox from '@material-ui/core/Checkbox';
import {signUp} from '../Services/UserServices';
import {withRouter} from 'react-router-dom'

const firstNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
const lastNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class BasicTextFields extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      error: false,
      outlinedType: "outlined-basic",
      label: "First Name",
      lastName: "",
      errorL: false,
      outlinedTypeL: "outlined-basic",
      labelL: "Last Name",
      password: "",
      errorP: false,
      outlinedTypeP: "outlined-basic",
      labelP: "Password",
      errorP: false,
      outlinedTypeCP: "outlined-basic",
      labelCP: "Confrim Password",
      type: "password",
      checkBoxStatus: false,
      email: "",
      errore: false,
      outlinedTypee: "outlined-basic",
      labele: "Email",
      statusFirstName: "",
      statusLastName: "",
      emailStatus: "",
      psswordStatus: "",
      confirmPasswordStatus: ""
    }
    this.inputRef = React.createRef()
    this.handleFirstName = this.handleFirstName.bind(this)
  }


  handleFirstName = (fromChaneEvent) => {
    if (firstNameRegex.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {

      this.setState({
        firstName: fromChaneEvent.target.value,
        error: false,
        outlinedType: "outlined-basic",
        label: "First Name",
        statusFirstName: ""

      })
    }
    else if (!firstNameRegex.test(fromChaneEvent.target.value)) {

      this.setState({
        error: true,
        outlinedType: "outlined-error",
        label: "First Name",
        statusFirstName: "Enter correct First Name"
      })
    }
  }

  handleLastName = (fromChaneEvent) => {

    console.log(fromChaneEvent.target.value)
    if (lastNameRegex.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {
      this.setState({
        lastName: fromChaneEvent.target.value,
        errorL: false,
        outlinedTypeL: "outlined-basic",
        labelL: "Last Name",
        statusLastName: "  "

      })
    }
    else if (!lastNameRegex.test(fromChaneEvent.target.value)) {
      console.log("fr")
      this.setState({
        errorL: true,
        outlinedTypeL: "outlined-error",
        labelL: "Last Name",
        statusLastName: "Enter Correct Last Name"
      })
    }
  }


  handlePassword = (fromChaneEvent) => {
    console.log(fromChaneEvent.target.value)
    if (passwordRegex.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {
      console.log("tr")
      this.setState({
        password: fromChaneEvent.target.value,
        errorP: false,
        outlinedTypeP: "outlined-basic",
        labelP: "Password",
        psswordStatus: ""

      })
    }
    else if (!passwordRegex.test(fromChaneEvent.target.value)) {
      console.log("fr")
      this.setState({
        errorP: true,
        outlinedTypeP: "outlined-error",
        labelP: "Password",
        psswordStatus: "Enter Correct Password"
      })
    }
  }

  handleCPassword = (fromChaneEvent) => {
    if (this.state.password == fromChaneEvent.target.value || fromChaneEvent.target.value == "") {
      this.setState({
        errorCP: false,
        outlinedTypeCP: "outlined-error",
        labelCP: "Confirmed",
        confirmPasswordStatus: ""
      })
    }

    else if (this.state.password !== fromChaneEvent.target.value) {
      this.setState({
        errorCP: true,
        outlinedTypeCP: "outlined-error",
        labelCP: "Confirm Password",
        confirmPasswordStatus: "Must Match Password"
      })

    }
  }

  showPassword = (checked) => {
    if (this.state.checkBoxStatus) {
      console.log("un checked")
      this.setState({
        type: "password",
        checkBoxStatus: false
      })

    }
    else {
      console.log('checked')

      this.setState({
        type: "text",
        checkBoxStatus: true
      })
    }

  }

  handleEmail = (fromChaneEvent) => {
    if (emailRegex.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {
      this.setState({
        email: fromChaneEvent.target.value,
        errore: false,
        outlinedTypee: "outlined-basic",
        labele: "Email", emailStatus: ""

      })
    }
    else if (!emailRegex.test(fromChaneEvent.target.value)) {
      console.log("fr")
      this.setState({
        errore: true,
        outlinedTypee: "outlined-error",
        labele: "Email", emailStatus: "Enter Correct Email"
      })
    }

  }

  submitData = () => {
    if (this.state.errorL == false && this.state.errorP == false && this.state.errore == false && this.state.error == false) {
      let obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        service : "advance"
      }
      signUp(obj).then(resp => {console.log(resp) 
      
        alert("Succedfully Added")
        console.log(this.props)
        this.props.history.push("/")
      })
    }
    else {
      console.log("error")
    }
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }



  render() {
    return (
      <form id="fc" >
        <div id="allFields">

          <div id="firstNameAndLastName" >
            <div id="fieldsContianer" ref={this.inputRef}>
              <TextField error={this.state.error} id={this.state.outlinedType} label={this.state.label} variant="outlined" class={this.props.firstName} onChange={this.handleFirstName} />
              <TextField error={this.state.errorL} id={this.state.outlinedTypeL} label={this.state.labelL} variant="outlined" class={this.props.lastName} onChange={this.handleLastName} />
            </div>
            <div class="errorNotification">
              <p id="ferror">{this.state.statusFirstName}</p>
              <p id="lerror">{this.state.statusLastName}</p>
            </div>
          </div>

          <div id="email">
            <TextField error={this.state.errore} id={this.state.outlinedTypee} label={this.state.labele} variant="outlined" class={this.props.email} onChange={this.handleEmail} className="emailField" />
            <div class="errorNotification"> <p class="errorNoti">{this.state.emailStatus}</p></div>
          </div>
          <div id="passwordAndPassword">
            <TextField error={this.state.errorP} class={this.props.password} id={this.state.outlinedTypeP} label={this.state.labelP} variant="outlined" onChange={this.handlePassword} type={this.state.type} />
            <TextField error={this.state.errorCP} id={this.state.outlinedTypeCP} class={this.props.confirmPassword} label={this.state.labelCP} variant="outlined" onChange={this.handleCPassword} type={this.state.type} />
          </div>
          <div id="passError">
            <p class="errorNoti">{this.state.psswordStatus}</p>
            <p class="errorNoti">{this.state.confirmPasswordStatus}</p>

          </div>
          <div id="checkBox">
            <Checkbox checked={this.state.checkBoxStatus} color="primary" class={this.props.checkBox} inputProps={{ 'aria-label': 'secondary checkbox' }} showPassword={this.state.showPassword} onChange={this.showPassword} />
            <p id="showPassword" class={this.props.para} >Show Password</p>
          </div>
          <div id="nextButton" onClick={this.submitData}>
            <Button variant="contained" color="primary" class={this.props.next}>
              Next
      </Button>
          </div>
        </div>
      </form>
    );
  }
}


export default withRouter(BasicTextFields);