// default Home Component
// App Component will only be visible once user is authenticated
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Header from './components/Header';
import Footer from './components/Footer';
import './layouts/Home.css';

class Home extends Component {

  state={
    first_name: "",
    last_name: "" ,
    email:"",
    password: "",
    zipcode: null,
    signup: false,
    loggedIn: false,
    userURl: "",
    user_id: null,
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        zipcode:this.state.zipcode
      })
    }).then(r=>r.json())
    .then(user=>console.log(user))
  }
  handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSignUp=()=>{
  this.setState({
    signup:true,
  })
}

handleLogin=(e)=>{
  e.preventDefault()
  console.log("in the handleLogin")
  this.setState({
    signup:false,
    [e.target.name]: e.target.value,
    loggedIn: true,
  })
  this.findUser(this.state.email,this.state.password)
}

findUser=(email, password)=>{
  console.log("in findUser")
  fetch( "http://localhost:3000/api/v1/users/")
  .then(r=>r.json())
  .then(users=>{
    let user= users.find(user =>{
      return user.email === email && user.password === password
    })
    this.setState({
      userUrl: `http://localhost:3000/api/v1/users/${user.id}`,
    })
  })
}

 signUpForm = ()=> {
   return<div className="loginForm">
  <h1> Please Sign up</h1>
  <form onSubmit={e => this.handleSubmit(e)}>
  <label><b>First Name </b></label><br/>
  <input type="text" name="first_name" value={this.state.first_name} onChange={e => this.handleChange(e)} ></input><br/>
  <label><b>Last Name </b></label><br/>
  <input type="text" name="last_name" value={this.state.last_name} onChange={e => this.handleChange(e)}></input><br/>
  <label><b>Email </b></label><br/>
  <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)}></input><br/>
  <label><b>Password</b></label><br/>
  <input type="text" name="password" value={this.state.password}onChange={e => this.handleChange(e)} ></input><br/><br/>
  <label><b>Zipcode</b></label><br/>
  <input type="text" name="zipcode" value={this.state.zipcode} onChange={e => this.handleChange(e)}></input><br/>
  <button type="submit" value="submit"> Submit </button>
  </form>
  </div>
}

  render() {
    return (
      <React.Fragment>
      <Header />
      <div className="login">
      <div>
      <button onClick={this.handleLogin}>Log In..</button>
      <button onClick={this.handleSignUp}>Sign Up..</button>
      {this.state.signup ?
        this.signUpForm():
         <div className="loginForm">
           <h1> Please Log In..</h1>
           <form onSubmit={ e => this.handleLogin(e)}>
           <label><b>Email </b></label><br/>
           <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)}></input><br/>
           <label><b>Password</b></label><br/>
           <input type="text" name="password" value={this.state.password}onChange={e => this.handleChange(e)} ></input><br/><br/>
           <button type="submit" value="submit"> Submit </button>
           </form>
     </div>
      }
      </div>
      </div>
      {this.state.loggedIn
        ?
        <MainContainer url={this.state.userUrl}/>
        :
        null}
      </React.Fragment>
    );
  }
}

export default Home;
