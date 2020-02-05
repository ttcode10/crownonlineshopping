import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-up.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { signUpStart } from './../../redux/user/user.action'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {displayName, email, password, confirmPassword} = userCredentials;

  const handelSubmit = event => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUpStart({displayName, email, password});
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  }

  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          required
          handleChange={handleChange}
          label='Display Name'
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          handleChange={handleChange}
          label='Email'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          handleChange={handleChange}
          label='Password'
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
          handleChange={handleChange}
          label='Confirm Password'
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )

}




const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);