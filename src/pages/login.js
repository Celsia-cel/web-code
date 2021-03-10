
import { makeStyles, TextField, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import {withRouter} from 'react-router'

const useStyles = makeStyles((theme) => ({

    root: {

        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 400,
        marginTop: 200
    },
    log: {
        marginTop: 10,
        justifyContent: 'center',
    },

    can: {
        marginTop: 10,
        marginLeft: 20,
        justifyContent: 'center',
    },

    user: {

        justifyContent: 'center',
        width: 200,


    },
    pass: {
        marginTop: 10,
        justifyContent: 'center',
        width: 200,
    },
    form: {

        marginRight: 200
    },
    TextField: {
        padding: '300px',

    },

}));

function Login(props) {
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [validFlag, setValidFlag] = useState(false);
    const [validpasswordFlag, setValidpasswordFlag] = useState(false);
    const [checkEmail, setcheckEmail] = useState(false);
    const [checkPassword, setcheckPassword] = useState(false);
    const [checknum, setchecknum] = useState(false);
    const [max, setmax] = useState(false);

    const validate = () => {
        console.log(username, password)
        //required
        if (username == "") {
            setValidFlag(true)
            setcheckEmail(false)
        } else {
            setValidFlag(false)
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)) {
                setcheckEmail(false)
            }
            else {
                setcheckEmail(true)
            }
        }
        //required
        if (password == "") {
            setValidpasswordFlag(true)
            setcheckPassword(false)
        } else {
            setValidpasswordFlag(false)
            if(password.charAt(0)== password.charAt(0).toUpperCase()){
                setcheckPassword(false)
                if(/^[a-zA-Z0-9.@!#$%&'*+/=?^_`{|}~-]+$/.test(password)){
                    debugger;
                    setchecknum(false)
                    if(password.length>=6 && password.length<=12){
                        setmax(false);
                    }
                    else{
                        setmax(true)
                    }
                }
                else{
                    debugger;
                    setcheckPassword(false)
                    setchecknum(true)
                }
            }
            else{
                setcheckPassword(true)
            }
        }

        if(checkPassword == false || validFlag == false || validpasswordFlag == false || checkEmail == false || checknum ==false || max == false ) {
            window.location.assign('/dashboard')
        }
    }

    const onChangeUserName = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        var password = e.target.value
        setPassword(password)
    }

    return (

        <Grid className={classes.root}>
            <div className>
                <form className={classes.form} >
                    <div className={classes.user} >
                        <TextField type="text" label="Username" variant="outlined" onChange={onChangeUserName} autoFocus></TextField>
                        {validFlag && <span>Required</span>}
                        {checkEmail && <span>Email id is not proper</span>}
                    </div>
                    <div className={classes.pass}>
                        <TextField type="password" label="Password" variant="outlined" onChange={onChangePassword}></TextField>
                        {validpasswordFlag && <span>Required</span>}
                        {checkPassword && <span>Password is not correct</span>}
                        {checknum && <span>password should contains number</span>}
                        {max && <span>password contains length in between 6-12</span>}

                    </div>
                    <div>
                        <Button variant="outlined" className={classes.log} onClick={validate}>Login</Button>
                        <Button type="reset" variant="outlined" className={classes.can}>Cancel</Button>
                    </div>

                </form>
            </div>
            
        </Grid>
        
    );
   

}
export default withRouter(Login);