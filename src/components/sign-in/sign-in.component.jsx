import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import { auth ,signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(){
    super();
    
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async evemt => {
    evemt.preventDefault();
    const {email, password} = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({email:"", password:""})
    } catch (error) {
      console.error(error)
    }
    console.log("submit");
  }
  handleChange = (event) => {
    event.preventDefault();
    const{name, value} =  event.target;
    this.setState({[name]: value})
  }
  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            label="email"
            handleChange={this.handleChange} 
            value={this.state.email} 
            required
          />
          <FormInput 
            name="password" 
            type="password" 
            label="password"
            handleChange={this.handleChange} 
            value={this.state.password} 
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn);