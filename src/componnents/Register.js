import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as EmailValidator from 'email-validator';
  
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
    const [emailError, setEmailError] = useState(false);
    
    const submit =  async (ev) => {
      ev.preventDefault();
      switch(ev.currentTarget.name) {
        case 'email':
          try {
             await props.service.register(name, email, password);
          } catch(e) {
            if (e.message === '409') {
              console.log('Email already taken');
            } else {
              
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

    const validateEmail = (email) => {
        setEmailError(!EmailValidator.validate(email));
    };
    
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
                  error={false}
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={(ev) => setName(ev.target.value)}
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={emailError}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(ev) => setEmail(ev.target.value)}
                  onKeyUp={(ev) => validateEmail(ev.target.value)}
                  name="email"
                  autoComplete="email"
                  aria-describedby="email-error-text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={false}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={(ev) => setPassword(ev.target.value)}
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