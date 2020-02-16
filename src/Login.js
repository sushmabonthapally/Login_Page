import React, {Component} from 'react';
import './Login.css';
import * as actionCreators from './store/actions/actions'
import {connect} from 'react-redux';

class Login extends Component
{
constructor(props){
    super(props);
    this.state = {
        textError : null,
        passwordError : null,
    }
    this.loginDetails = this.loginDetails.bind(this);
}

loginDetails=(e) =>
{
 e.preventDefault();
if(this.checkValidation(e))
 {
  if(this.props.name === "hruday@gmail.com" && this.props.passcode === "hruday123")
   {
    setTimeout(()=>{
      alert("form submitted");
      this.props.history.push('/new')
    },500)
   }
}
else                                  
  alert("form has error")
}

checkValidation = ()=>
{
    let isValid = true;
    if(this.props.name === '' && this.props.passcode === '')
    {
        isValid = false;
        this.setState({textError : <p className = "formText">Please enter your Email</p>});
        this.setState({passwordError : <p className = "formText">Please enter your Password</p>});
    }
    else{
      if(this.props.name !== '')
    {
      let lastAtPos = this.props.name.lastIndexOf('@');
      let lastDotPos = this.props.name.lastIndexOf('.com'); 
       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.props.name.indexOf('@@') === -1 && lastDotPos > 2 && (this.props.name.length - lastDotPos) > 2 && this.props.name.trim() && this.props.name.endsWith(".com"))) {
        isValid = false;
        this.setState({textError : <p className = "formText">Email incorrect</p>});
      }
      if(this.props.name !== "hruday@gmail.com")
      {
        isValid = false;
        this.setState({textError : <p className = "formText">Please enter correct email-id</p>});
      }
      else
      this.setState({textError :<p className = "helpblock"/>});
    }
  }
   
      if(this.props.passcode === '')
      {
          isValid = false;
          this.setState({passwordError : <p className = "formText">Please enter your password</p>});
      }
      else
      {
      if(this.props.passcode !== "")
      {
          if(!(this.props.passcode.match(/^[a-zA-Z0-9]+$/)))
          {
            isValid = false;
            this.setState({passwordError : <p className = "formText">Password should not contain special characters</p>});
          }
          if(this.props.passcode !== "hruday123")
          {
            isValid = false;
            this.setState({passwordError : <p className = "formText">Password is incorrect</p>});
          }
          else
            this.setState({passwordError :<p className = "helpblock"/>});
       }
    }
    return isValid;
}
   render(){
    const { name, passcode,textError,passwordError} = this.state;
       return(
         <div style = {{marginTop: "10%"}}>
          <form  className = "Login">
            <div>
            <h4>Login Page</h4>
            </div>
            <div>
            <label htmlFor = "UserName"><b>UserName:</b></label>
            <input type = "email" className="formControl" placeholder = "enter email" value= {name} id= "name" onChange= {this.props.onUserChange}/>
            {textError}
           </div>
            <div>
            <label htmlFor = "Password"><b>Password:</b></label>
            <input type = "password"  className="formControl" placeholder = "enter password" value = {passcode} id= "passcode" onChange= {this.props.onPasswordChange}/>
            {passwordError}
            </div>
            <div>
            <button className = "btn" onClick = {(e)=>this.loginDetails(e)}>Login</button>
            </div>
          </form>
        </div>
       )
       
   }
}

const mapStateToProps = (state)=>
{
 return {
    name : state.userName,
    passcode : state.password

 }
}

const mapDispatchToProps = (dispatch)=>
{
  return {
    onUserChange : (event)=>dispatch(actionCreators.username(event)),
    onPasswordChange : (e)=>dispatch(actionCreators.password(e)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);