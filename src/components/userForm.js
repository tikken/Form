import React, { Component } from 'react'
import FormUserDetail from './userDetail'
import PersonalDetails from './personalDetails'
import Confirm from './confirm'
import Success from './success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state
        const { firsName, lastName, email, ocupation, city, bio } = this.state
        const values = { firsName, lastName, email, ocupation, city, bio }
        switch (step) {
            case 1:
                return (
                    <FormUserDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <PersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 4:
                return <Success />
        }
        return (
            <div>

            </div>
        )
    }
}

export default UserForm
