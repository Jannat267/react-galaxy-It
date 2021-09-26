// useEffect & useState import from react
import React, { useEffect, useState } from 'react';
import Add from './details/Add';
import Member from './members/Member';
// company componant
const Company = () => {
    const[members,setMembers]=useState([]);
    const[addMember,setAddMember]=useState([]);

    // load all members data from json file
    useEffect(()=>{
        fetch ('./members.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])
    // create add function for add data in cart
    const add=(member)=>{
       
        const newMember = [...addMember,member];
        setAddMember(newMember);

    }
    return (
        <div className='container mt-4'>
        <div className='company d-flex'>
            <div className='members row w-75 '>
            {members.map(member=> 
            // use member & add componant
            <Member 
            key={member._id}
            member={member}
            addMember={add}
            > 
            </Member>
            )} 
            </div>
            
            <div className='addMember ms-3 mt-2 p-1'>
               
            <Add 
            addMember={addMember}></Add> 
            </div>
        </div>
        </div>
        
    );
};

export default Company;