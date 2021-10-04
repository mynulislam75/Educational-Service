import React from 'react';
import './Singlecourse.css'

const Singlecourse = (props) => {
    const{name,img,price,teacher}=props.course;
    return (
        <div className="col-lg-2 ps-5 pe-5" id="course-details">

            
            <img className="img-fluid p-2" src={img} alt="" />
            <div className="p-2">
            <h3>{name}</h3>
            <h3>{teacher}</h3>
            <h5>price:{price}</h5>
            <button className="bg-primary">Enroll Now</button>
            </div>
          
        
          
        </div>
    );
};

export default Singlecourse;