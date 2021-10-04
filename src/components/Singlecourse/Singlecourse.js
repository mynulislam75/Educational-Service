import React from 'react';
import './Singlecourse.css'

const Singlecourse = (props) => {
    const{name,img,price,teacher}=props.course;
    return (
        <div className="col-lg-2" id="course-details">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>{teacher}</h3>
            <h5>price:{price}</h5>
          
        </div>
    );
};

export default Singlecourse;