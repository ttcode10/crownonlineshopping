import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from './../../redux/user/user.action';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userCredentials;

  const handelSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
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
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} google>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  )




}





const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);