import React, { useEffect, useState } from 'react';
import Member from './members/Member';

const Company = () => {
    const[members,setMembers]=useState([]);
    useEffect(()=>{
        fetch ('./members.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])
    return (
        <div className='container'>
<div className='company d-flex'>
            <div className='members row'>
            {members.map(member=> 
            <Member 
            key={member._id}
            member={member}
            // addtoCart={addtoCart}
            >
                
            </Member>
            )} 
            </div>
            <div className='details'>
            esdrgds
            </div>
        </div>
        </div>
        
    );
};

export default Company;