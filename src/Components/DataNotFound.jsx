import React from 'react'; 

import notfound from '../Images/DataNotFound.jpg';

const NotFound = () => {    //whwn data will not found to us
    return (
        <img src={notfound} alt="image is loading..."  style={{width: '30%', margin: '80px 0 0 35%'}}/>
    )
}

export default NotFound;
