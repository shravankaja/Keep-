import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


class TextFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "outlined-basic",
            error: false,
            label: props.nameOfField,
            fieldValue: " ",
            typeOfField : props.type            
        }
    }
    handlePattern = (fromChaneEvent) => {
        console.log(this.props.pattern)
        if (this.props.pattern.test(fromChaneEvent.target.value) || fromChaneEvent.target.value == "") {
            if(this.props.nameOfField == "Email") {
            this.sendParent(true,"e")
            }
            else if(this.props.nameOfField == "Password") {
                this.sendParent(true,"p")
            }
             this.setState({
                fieldValue: fromChaneEvent.target.value,
                error: false,
                label: this.props.nameOfField


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

    sendParent (value,type) {
        this.props.controlParent(value,type)
    }

   


    render() {
        return (
            <TextField onChange={this.handlePattern} type = {this.state.typeOfField} error={this.state.error} id={this.state.type} label={this.state.label} variant="outlined" />
        )
    }
}

export default TextFields;