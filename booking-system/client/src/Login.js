import React, { useEffect, useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel, RadioGroup, Radio} from '@mui/material';


const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userGroup, setUserGroup] = useState('Student')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Session timed out")
            setIsAuthenticated(false)
        }, 1000 * 60 * 60) // 1 hr
        return () => clearTimeout(timer)
    },[])

    const onLogin = (e) => {
        e.preventDefault()
        
        const userForm = {
            username: username,
            password: password,
            userGroup: userGroup
        }
        // Here you can do authentication
        const authenticated = authenticate(userForm)

        if (authenticated){
            setIsAuthenticated(true)
            localStorage.setItem('username', username )
            localStorage.setItem('userGroup', userGroup)
        }
    }

    const onLogout = () => {
        setIsAuthenticated(false)
        localStorage.clear()
    }

    // Replace with real authentication
    const authenticate = ({username, password, userGroup}) => {
        return true
    }

    return (
        <Grid>
            {   
                isAuthenticated ? (
                    <Paper elevation={10} style={paperStyle} >
                        <h2>Homepage</h2>
                        <h3> {localStorage.getItem('username')} ({localStorage.getItem('userGroup')}) </h3>
                        <Button 
                            type='submit' 
                            color='secondary' 
                            variant="contained" 
                            style={btnstyle} 
                            onClick={onLogout}
                            fullWidth
                        >
                            Sign out
                        </Button>
                    </Paper>
                ):(
                    <Paper elevation={10} style={paperStyle} >
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                        <form onSubmit={onLogin}>
                            <Grid 
                                container 
                                direction="column"
                                justify="center"
                                alignItems="stretch"
                                spacing={2}
                            >
                                <Grid item>
                                    <TextField 
                                        name='username'
                                        value={username} 
                                        label='Username' 
                                        placeholder='Enter username' 
                                        variant="outlined" 
                                        onChange={(e) => setUsername(e.target.value)} 
                                        fullWidth 
                                        required 
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField 
                                        name='password'
                                        value={password} 
                                        label='Password' 
                                        placeholder='Enter password' 
                                        type='password' 
                                        variant="outlined"
                                        onChange={(e) => setPassword(e.target.value)} 
                                        fullWidth 
                                        required 
                                    />
                                </Grid>
                                <Grid item>
                                    <RadioGroup
                                        name="userGroup"
                                        value={userGroup}
                                        onChange={(e)=>{ setUserGroup(e.currentTarget.value)}}
                                    >    
                                        <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                        <FormControlLabel value="Lecturer" control={<Radio />} label="Lecturer" />
                                        <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item>
                                    <Button 
                                        type='submit' 
                                        color='primary' 
                                        variant="contained" 
                                        style={btnstyle} 
                                        fullWidth
                                    >
                                        Sign in
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default Login;
