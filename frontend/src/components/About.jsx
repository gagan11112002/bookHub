import React from 'react';
import {Link} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'> 
		 <div>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className='mt-28 text-center '>
            <h1 className='text-2xl md:text-4xl'>
           <span className='text-green-500 '>About the developer &hearts;</span>
            </h1>
        
       <div>

       <div className="container mx-auto p-4 mt-20 justify-center text-justify">
     
      <p className="mb-4">
        <strong>bookHub</strong> is developed by Gagan Sain, an ardent Full Stack Web Developer with a profound knowledge of modern web technologies. Gagan has a strong command of ReactJS, HTML, Tailwind CSS, and JavaScript, which he has used to meticulously craft this platform. His dedication to creating a seamless and engaging user experience is evident in every aspect of bookHub.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>ReactJS</strong>: Powering the dynamic and responsive user interface of bookHub.</li>
        <li><strong>HTML</strong>: Providing the foundational structure of the website.</li>
        <li><strong>Tailwind CSS</strong>: Offering a utility-first approach to CSS, ensuring a modern and cohesive design.</li>
        <li><strong>JavaScript</strong>: Adding interactivity and enhancing the user experience.</li>
        <li><strong>Dependencies</strong>: Various npm packages and libraries have been integrated to ensure robust functionality and performance.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3">Developer’s Vision</h2>
      <p className="mb-4">
        Gagan Sain's vision for bookHub is to create a responsive project for book lovers, where they can easily explore, discover, and purchase their favorite books. His expertise in full-stack development has allowed him to build a platform that is not only visually appealing but also highly functional and intuitive. bookHub stands as a testament to Gagan's commitment to quality and user satisfaction, making it a top choice for book enthusiasts around the world.
      </p>
    </div>

       

       </div>
        <Link to="/">
        <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300 mt-6'>
            Back
        </button>
        </Link>

            
        </div>
        </div>
        <br></br>
        <br></br>
     </div>
           </div>
    
    <Footer/>
    </>
  );
}

export default About;