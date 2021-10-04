/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Singlecourse from '../Singlecourse/Singlecourse';

const Home = () => {

    const [course, setCourse] = useState([]);
    // loading data from public folder
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>

            <div className="row p-4 container">

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1>What We Provide</h1>
                    <small>A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers</small>

                    <div className="row mt-5">

                        <div className="col-lg-6">
                        <i class="fas text-success fa-check-circle"></i>
                            <h5>Exclusive Classes</h5>
                            <p>IN our institute there are a number of gppd teachers available.In our institute your children get proper instruction surely</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas  text-success fa-check-circle"></i>
                            <h5>Medical Treatment</h5>
                            <p>We have our own hospital in our institute.If any kids getting ill ,then we can give them proper treatment.</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas  text-success fa-check-circle"></i>
                            <h5>Healthy Food Services</h5>
                            <p>In 6 days of week ,we provide every kids fruits,bannana,apple,milk in 3 days.So,in our institue your kids get proper healthy life</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas  text-success fa-check-circle"></i>
                            <h5>Playing Ground</h5>
                            <p>We have a big play ground in our institue.so in our institute your kids are able to play properly.And this is very much important</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas  text-success fa-check-circle"></i>
                            <h5>Indoor Games</h5>
                            <p>While having big play ground we also have an indoor play ground.If any one wants to play indoor games then its possible in our institute?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas  text-success fa-check-circle"></i>
                            <h5>High Monitoring</h5>
                            <p>In our institue your children will be monitirized every time in a day.We have some features that can monitor your kids properly</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <h1>Welcome To Our School</h1>
                    <p>Welcome to our school!!We have our parmanent campus in USA,Road 33.OUr campus feedback in very high.Every year a lots of kids do better from our campus.We ranked 5th in the last yeas.Also some of our kids are now in big place.We promise we give best .</p>
                    <img className="w-75 h-75" src="https://img.etimg.com/thumb/msid-77391367,width-650,imgsize-677864,,resizemode-4,quality-100/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg" alt="" />
                </div>
            </div>

{/* class container */}
            <div className="class-container mt-4 mb-4">

                    <div className="p-4">
                    <h1>Classes We Offer</h1>
                    <p>We have a lots of experienced teacher in our institue.So,you cwill get our besdt services.We promise,best services.</p>
                    </div>
                    
                
                <div className="row">

                    {
                        course.map(course => <Singlecourse 
                            course={course}
                            key={course.key}
                            ></Singlecourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;