import React ,{Component} from 'react'
import '../Links.css'
class Links extends Component {
    render() {

        return (

        <div id = "linkContainer">
        <a id = {this.props.id1} href ="">{this.props.name}</a>
        </div>
        )
    }
}

export default Links;