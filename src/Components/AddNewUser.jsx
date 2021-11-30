import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import { addUser } from '../Api/api';

const initialValue = {  //variable declration with initial values
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    zipcode: '',
}

const useStyles = makeStyles({   //material ui css
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);                  //state defines   
    const { name, username, email, phone, website, zipcode } = user;
    const classes = useStyles();
    let navigate = useNavigate();

    const onValueChange = (e) => {    //when value update
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {   //onClick Event of button
        await addUser(user);
        navigate('/all');
    }

    return (

        //in material ui FormGroup in place of <form>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Gmail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Phone_No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Website</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='website' value={website} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Zip_Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='zipcode' value={zipcode} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="secondary" onClick={() => addUserDetails()}>Add_New_User</Button>
            </FormControl>
        </FormGroup>
    )
}
export default AddUser;
