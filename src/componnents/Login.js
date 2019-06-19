import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
        backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
  
const LoginComponent = (props) => {
    const classes = useStyles();
    const errorMessage = props.error;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
 
    const validateEmailField = (email) => {
        setEmailError(email.length > 0 ? null : 'error');
    };

    const validatePasswordField = (password) => {
        setPasswordError(password.length > 0 ? null : 'error');
    };

    const submit =  async (ev) => {
        ev.preventDefault();       
        validateEmailField(email);
        validatePasswordField(password);
        if(!email || !password) return; 
        props.login(email, password);
    };  

    console.log('errorMessage=',errorMessage);

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={submit} noValidate>
              <TextField
                error={emailError !== null}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(ev) => setEmail(ev.target.value)}
                onBlur={(ev) => validateEmailField(ev.target.value)}
                onKeyUp={(ev) => validateEmailField(ev.target.value)}
              />
              <TextField
                error={passwordError !== null}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(ev) => setPassword(ev.target.value)}
                onKeyUp={(ev) => validatePasswordField(ev.target.value)}
                onBlur={(ev) => validatePasswordField(ev.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={submit}
              >
                Sign In with Email
              </Button>
              <Button 
                name="facebook"
                type="button" 
                fullWidth 
                variant="contained" 
                color="primary" 
                onClick={(ev) => props.loginOAuthFacebook()}
              >
                Sign in with Facebook
              </Button>
              <Button
                type="submit"
                name="google"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={(ev) => props.loginOAuthGoogle()}
                className={classes.submit}
              >
                Sign in With Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
}

LoginComponent.propTypes = {
    loginOAuthGoogle: PropTypes.func.isRequired,
    loginOAuthFacebook: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    loggingIn: PropTypes.bool
};

export default LoginComponent;