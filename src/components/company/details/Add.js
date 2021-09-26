import React from 'react';
import './Add.css';

const Add = (props) => {
     const {addMember} = props;

     const totalReducer = (previous, employee) => previous + employee.salary;
	const total = addMember.reduce(totalReducer, 0);
    

return (
    <div className='Cart bg-dark text-white p-2'>
        <h3>Total <strong> {addMember.length}</strong> People added</h3>
        <h3>Total Salary :<strong> {total.toFixed(2)}</strong></h3>
    </div>
);

};

export default Add;