import React from 'react';

import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Api/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    zipcode: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone, website, zipcode } = user;
    const { id } = useParams();  //The react-router-dom package has useParams hooks that let you access the parameters of the current route.
    const classes = useStyles();
    let navigate = useNavigate();

    useEffect(() => {             //update during load
        loadUserDetails(); // this section is coded into the componentDidMount() method which is executed only once in the component life cycle.
    }, []);

    const loadUserDetails = async () => {    //save response
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {  //onClick={() event of update button
        await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {         //onChange vakues of the field
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Update Your Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Gmail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Website</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='website' value={website} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter_Zip_Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='zipcode' value={zipcode} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="secondary" onClick={() => editUserDetails()}>Update</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;

