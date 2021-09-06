import React, { Component, Fragment } from "react"
import {withAlert} from "react-alert"
import { connect} from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        /*
            prevProps: is a 
            object come with 
            this functions indecate 
            for the previous snapshot 
            of the props variables.

            prevProps have a variable ( among other variables) 
            with name error ,
             this error variable is also 
             object that we declared earlier : 
             { msg:{}, status: null}, 
             in this msg there is the 
             fields and the message error
             for each field
            
            this.props: is the 
            corrent state of the
             props variables
        */
        const { error, alert, message}= this.props

        /*
        console.log(prevProps)
        console.log(error)
        console.log(alert)
        console.log(message)
        */

        if(error !== prevProps.error){
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
            if(error.msg.message) alert.error(`Message: ${error.msg.message.join()}`)
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join())
            if(error.msg.username) alert.error(error.msg.username.join())
        }

        if(message!==prevProps.message){
            if(message.deleteLead) alert.success(message.deleteLead)
            if(message.addLead) alert.success(message.addLead)
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch)
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToPrps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToPrps)(withAlert()(Alerts));
