import './Add.css';
// add componant
const Add = (props) => {
    
     const {addMember} = props;
     
    //  calculating total salary after member add

     const totalReducer = (previous, employee) => previous + employee.salary;
	const total = addMember.reduce(totalReducer,0);
    return (
        // show total salary and name of members
        <div className='Cart bg-dark text-white p-2'>
        <h3>Total <strong> {addMember.length}</strong> People added</h3>
        <h3>Total Salary :<strong> {total.toFixed(2)}</strong></h3>
        <h3>{addMember.map((member, index) =><li key={index}> {member.name} </li>)}
        </h3>
    </div>
    
);

};

export default Add;