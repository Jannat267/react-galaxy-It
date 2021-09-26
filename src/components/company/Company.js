import React, { useEffect, useState } from 'react';
import Add from './details/Add';
import Member from './members/Member';

const Company = () => {
    const[members,setMembers]=useState([]);
    const[addMember,setAddMember]=useState([]);
    useEffect(()=>{
        fetch ('./members.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])
    const add=(member)=>{
        // console.log(member)
        const newMember = [...addMember,member];
        setAddMember(newMember);

    }
    return (
        <div className='container mt-4'>
        <div className='company d-flex'>
            <div className='members row w-75 '>
            {members.map(member=> 
            <Member 
            key={member._id}
            member={member}
            addMember={add}
            > 
            </Member>
            )} 
            </div>
            <div className='addMember ms-3 mt-4 p-1'>
                
            <Add addMember={addMember}></Add> 
            </div>
        </div>
        </div>
        
    );
};

export default Company;