import React from 'react';
import { useState } from 'react';
import './member.css';
// create member componant and get all the property of its
const Member = (props) => {
    // destructure the array and store data in variable
    const {name,age,email,salary,designation,picture,gender}=props.member;
    const [double, setDouble] = useState(false);
    
    return (
        // create a cart for a single member
          <div className='member col-4 g-2 '>
           <div className='card p-2 bg-dark text-white '>
           <img className="card-img-top w-50 circle mx-auto" src={picture} alt="employee" />
          <div className='member-info'>
            <p><strong>Name :</strong>  {name} </p>
            <p><strong>Designation :</strong> {designation}</p>
            <p><strong>Email :</strong>{email}</p>
            <p><strong>Age :</strong> {age} 
            <strong>Gender :</strong>{gender}</p>
            <p><strong>Salary :</strong>{salary}</p>
            {/* Add button & function call in button click */}
            <button disabled = {double} className='btn btn-warning'  onClick={()=>{props.addMember(props.member); setDouble(true)}} ><i className="fas fa-cart-plus"></i>Add to cart</button>
          </div>
          </div>
        </div>
        
    );
};

export default Member;