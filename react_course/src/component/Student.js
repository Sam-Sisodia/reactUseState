import React  from "react";

import StudentClass from "./Student_class";
// import propTypes form "props-propTypes"
import propTypes from 'prop-types';

const Student = (props) =>{
    return(
        <div className="student">
            <h1> My name is {props.name}</h1>
            <h2>Student class call here</h2>
            <StudentClass name= {props.name}class="33"/>
        </div>
    )
}

export default Student;

Student.propTypes={
    name:propTypes.string
}

Student.defaultProps={
    name:"test user"
}
