    import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


class TextFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "outlined-basic",
            error: false,
            label: props.nameOfField,
            fieldValue: "",
            typeOfField : props.type,
            valueEmail : "",
            valuePassword : "" ,
            fieldValue1 : ""         
        }
    }
    handlePattern = (fromChaneEvent) => {
        if (this.props.pattern.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {
           console.log(this.props)
            if(this.props.nameOfField == "Email") {
                this.setState({fieldValue : fromChaneEvent.target.value})
                this.sendParent(true,"e", fromChaneEvent.target.value)
            }
            else if(this.props.nameOfField == "Password") {
                this.setState({fieldValue1 : fromChaneEvent.target.value})
                this.sendParent(true,"p", fromChaneEvent.target.value)
            }
            this.setState({
                error: false,
                label: this.props.nameOfField,
            })
        }
        else if (!this.props.pattern.test(fromChaneEvent.target.value)) {
            if(this.props.nameOfField == "Email") {
                this.sendParent(false,"e")
                }
                else if(this.props.nameOfField == "Password") {
                    this.sendParent(false,"p")
                }
            this.sendParent(false)
            this.setState({
                error: true,
                label: this.props.nameOfField
            })
        }
    }

    sendParent (value,type, value1) {
        console.log("from textfields : ", value1)
        this.props.controlParent(value,type, value1)
    }

    render() {
        return (
            <TextField onChange={this.handlePattern} type = {this.state.typeOfField} error={this.state.error} id={this.state.type} label={this.state.label} variant="outlined" />
        )
    }
}

export default TextFields;