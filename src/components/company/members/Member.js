import React from 'react';
import './member.css';

const Member = (props) => {
    console.log(props);
    const {name,age,email,salary,designation,picture}=props.member;
    return (
        <div className='member col-4 g-2'>
           <div className='card p-2 bg-dark text-white'>
           <img class="card-img-top w-50 circle mx-auto" src={picture} alt="Card image cap" />
          <div className='member-info'>
            <p><strong>Name :</strong>  {name} </p>
            <p><strong>Designation :</strong> {designation}</p>
            <p><strong>Age :</strong> {age}</p>
            <p><strong>Email :</strong>{email}</p>
            <p><strong>Salary :</strong>{salary}</p>
            <button className='btn' >Add to cart</button>
          </div>

           </div>
                
           
        </div>
    );
};

export default Member;