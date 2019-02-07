import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
});

class Login extends Component {
    state = {
        login: '',
        password: ''
    }
    
    submit = (ev) => {
       ev.preventDefault();
       const { login, password } = this.state;
       this.props.login(login, password);
    };

    inputChange = (ev) => {
        const { name, value } = ev.target;
        this.setState({ [name]: value });
    }

    siggningInWithGoogle = () => {
        this.props.loginOAuthGoogle();
    };

    render() {
        let errorElement;
        const { loggingIn, classes, error } = this.props;
        const { login, password } = this.state;
        if(error) errorElement = <small>{error}</small>;
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}> 
                        <LockOutlinedIcon />   
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {errorElement}
                    <form name="form" onSubmit={ this.submit } className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="login">Email Address</InputLabel>
                            <Input id="email" name="login" value={login} autoComplete="login" autoFocus onChange={this.inputChange}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" value={password} onChange={this.inputChange}type="password" id="password" autoComplete="current-password" />
                        </FormControl>
                        <FormControl margin="normal" fullWidth>
                            <Button type="submit" fullWidth variant="contained" color="primary" disabled={loggingIn}>Login</Button>
                        </FormControl>
                    </form>
                    <Button type="submit" fullWidth variant="contained" color="secondary" onClick={this.siggningInWithGoogle}>Signing in with Google</Button>
                </Paper>
            </main>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    loggingIn: PropTypes.bool
  };

export default withStyles(styles)(Login);