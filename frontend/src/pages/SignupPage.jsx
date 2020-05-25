import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  login,
  logout,
  signup
} from '../actions/userActions';

class SignupPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    imgUrl: '',
  }

  handleChange = (ev) => {
    let { name, value } = ev.target;
    value = ev.target.type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('ev2', ev);
    const userToAdd = this.state;
    userToAdd.createdAt = Date.now();
    userToAdd.isAdmin = false;
    const { email, password, firstName, lastName } = this.state;
    if (!email || !password || !firstName || !lastName) {
      return this.setState({ msg: 'All inputs are required!' });
    }
    const signupCreds = { email, password, firstName, lastName };
    console.log('signupCreds',signupCreds);
    
    this.props.signup(signupCreds);
    this.setState({ signupCred: { email: '', password: '', firstName: '', lastName: '' } });
  }


  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className="form" noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  className="no-outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" className="form-outline" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              className="submit"
              type="submit"
              fullWidth
              variant="contained"
              onClick={this.handleSubmit}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
    // isLoading: state.system.isLoading
  };
};
const mapDispatchToProps = {
  login,
  logout,
  signup,

};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);