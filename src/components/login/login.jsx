import React from "react";
import loginImg from "../../login.svg";
import "./style.scss"



export class Login extends React.Component {
  userData;
  constructor(props) {
    super(props);
    

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        password: '',
        
    }

  }

  // Form Events
  onChangeName(e) {
    this.setState({ name: e.target.value })
}

onChangePassword(e) {
    this.setState({ password: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  this.setState({
      name: '',
      password: '',
      
  })
}

// React Life Cycle
componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('user')) {
      this.setState({
          name: this.userData.name,
          password: this.userData.password,
          
      })
  } else {
      this.setState({
          name: '',
          password: '',
         
      })
  }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user', JSON.stringify(nextState));
}

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div  className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"  value={this.state.name} onChange={this.onChangeName} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
             <a href='./dash' > Login </a>
          </button>
        </div>
      </div>
      </form>
    );
  }
}
// export default Login;
