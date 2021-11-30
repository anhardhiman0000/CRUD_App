import React from 'react';  // eslint-disable-line

import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';   //provided backend url

//Get all data
export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${URL}/users${id}`);
}

//create new daata
export const addUser = async (user) => {
    return await axios.post(`${URL}/posts`, user);
}

//update the existing data
export const editUser = async (id, user) => {
    return await axios.put(`${URL}/posts/${id}`, user)
}

//delete existing data
export const deleteUser = async (id) => {
    return await axios.delete(`${URL}/posts/${id}`);
}



