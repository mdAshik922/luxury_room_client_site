import React, { useEffect, useState } from 'react';
import ShowProject from './ShowProject';

const Projects = () => {
const [projects, setProject] = useState([]);

useEffect(()=>{
    fetch('https://aqueous-hollows-73658.herokuapp.com/rooms')
    .then(res=>res.json())
    .then(data => setProject(data))
},[]);
    return (
        <div id="project">
            <div style={{marginTop: "10%"}}>
            <h2>Discover the latest interior Design Available today</h2>
        </div>
            <div data-aos="flip-left" style={{display: "flex", flexWrap: "wrap",  margin: "5%"}}>
                {
                projects.map(project =><ShowProject
                key={project._id}
                project={project}
                ></ShowProject>)
                }
            </div>
        </div>
    );
};

export default Projects;