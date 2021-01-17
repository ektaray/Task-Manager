import React from "react";
import loginImg from "../../login.svg";
import "./style.scss"


export class Register extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      password: '',
      email: '',
      
  }
  }

   // Form Events
   onChangeName(e) {
    this.setState({ name: e.target.value })
}

onChangePassword(e) {
    this.setState({ password: e.target.value })
}

onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  this.setState({
      name: '',
      password: '',
      email: '',
      
  })
}
// React Life Cycle
componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('user')) {
      this.setState({
          name: this.userData.name,
          password: this.userData.password,
          email: this.userData.email,
          
      })
  } else {
      this.setState({
          name: '',
          password: '',
          email: '',
         
      })
  }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user', JSON.stringify(nextState));
}

  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.name} onChange={this.onChangeName} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
          <a href='./dash' > Register </a>
          </button>
        </div>
      </div>
      </form>
    );
  }
}
// export default Register;
