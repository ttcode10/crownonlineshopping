import React from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { signUpStart } from './../../redux/user/user.action'

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handelSubmit = event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;
    const { signUpStart } = this.props;

    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    signUpStart({displayName, email, password});
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-up'>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            label='Display Name'
          />
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='Password'
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
            label='Confirm Password'
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);