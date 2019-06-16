import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validateEmail from '../validators/validate-email';
import {validateName} from '../validators/validate-name';
import validatePassword from '../validators/validate-password';
  
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(0, 0, 1),
    },
 }));

 export default function Register(props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    let emailErrorMessage;
    
    const submit =  async (ev) => {
      ev.preventDefault();
      switch(ev.currentTarget.name) {
        case 'email':
          validateNamField(name);
          validateEmailField(email);
          validatePasswordField(password);
          if(!name || !email || !password) return; 
          try {
            await props.service.register(name, email, password);
          } catch(e) {
            if (e.message === '409') {
              setEmailError('Email address already taken');
            } else {
              console.log(e.body.message);
              setEmailError('Email address is incorrect');
            }
          }
        break;
        case 'facebook':
            props.loginOAuthFacebook();
        break;
        case 'google':
            props.loginOAuthGoogle();
        break;
        default: 
      }
    }

    const validateNamField = (name) => {
      setNameError(validateName(name) ? null : '');
    }

    const validateEmailField = (email) => {
      setEmailError(validateEmail(email) ? null : '');
    };

    const validatePasswordField = (password) => {
      setPasswordError(validatePassword(password ? null : ''));
    }
    
    if(emailError) emailErrorMessage = <FormHelperText error={true} id="email-error-text">{emailError}</FormHelperText>;

    return (<Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={submit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={nameError !== null}
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={(ev) => setName(ev.target.value)}
                  onKeyUp={(ev) => validateNamField(ev.target.value)}
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={emailError !== null}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(ev) => setEmail(ev.target.value)}
                  onKeyUp={(ev) => validateEmailField(ev.target.value)}
                  name="email"
                  autoComplete="email"
                  aria-describedby="email-error-text"
                />
                {emailErrorMessage}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={passwordError !== null}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={(ev) => setPassword(ev.target.value)}
                  onKeyUp={(ev) => validatePasswordField(ev.target.value)}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept terms and conditions of this"
                />
              </Grid>
            </Grid>
            <Button 
              type="submit" 
              name="email"
              fullWidth 
              variant="outlined" 
              color="primary"
              onClick={submit}
              className={classes.submit}>
                Sign up With Email
            </Button>
            <Button
              type="submit"
              name="facebook"
              fullWidth
              variant="contained"
              color="primary"
              onClick={submit}
              className={classes.submit}>
                Sign up With Facebook
            </Button>
            <Button
              type="submit"
              name="google"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={submit}
              className={classes.submit}>
                Sign up With Google
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>);
}