/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Singlecourse from '../Singlecourse/Singlecourse';

const Home = () => {

    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>

            <div className="row p-4 container">

                <div className="col-lg-6 bg-danger">
                    <h1>What we provide</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore rerum vitae quae sint quod iste magni maxime dolor nobis.</small>
                    <div className="row mt-5">

                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                        <div className="col-lg-6">
                        <i class="fas fa-check-circle"></i>
                            <h5>High Secuirity</h5>
                            <p>We promise the best secuirity.we have such a huge Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis?</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <h1>Welcome to our school</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatum fugit neque facilis inventore possimus minima, placeat a aspernatur pariatur quasi temporibus maxime asperiores sunt quas dicta saepe corporis distinctio voluptatibus quod dolores voluptas architecto ducimus. Qui dolorum harum, fugit incidunt rerum molestiae aut ab quas amet dolores iste ullam?</p>
                    <img className="w-75 h-75" src="https://img.etimg.com/thumb/msid-77391367,width-650,imgsize-677864,,resizemode-4,quality-100/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg" alt="" />
                </div>
            </div>

{/* class container */}
            <div className="class-container mt-4 mb-4">

                    <div className="p-4">
                    <h1>Classes we offer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo sed vitae sunt aliquam consectetur consequuntur pariatur reiciendis modi perspiciatis.</p>
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