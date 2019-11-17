import React from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions'
import CreateForm from './CreateForm'

  class CreateFormContainer extends React.Component {
    state = {
        url: "",
        title: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
          // zeby nie odszwiedzala sie przegladarka  
        this.props.createImage(this.state) // po kliknieciu niech zadziala akcja towrzenia nowego obrazku
           
        this.setState({
            title: "",
            url: ""
        })
    }

    render() {
        return (
        
                <CreateForm 
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state} 
                />
        )
    }
}

export default connect (null, { createImage }) (CreateFormContainer) 

