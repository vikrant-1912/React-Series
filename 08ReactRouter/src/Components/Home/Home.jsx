import React from "react"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h3 className="text-4xl font-bold sm:text-5xl">
                           My Resume,
                            <span className="hidden sm:block text-4xl">Download Here</span>
                        </h3>

  
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-yellow-700 rounded-lg hover:opacity-75"
                            to="/Resume.pdf" 
  target="_blank" 
  download={"Vikrant_Resume.pdf"}
  rel="noopener noreferrer"            //     for Security Best Practices , we add this "rel = noopener noreferrer"     //
>  
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download Now
                        </Link> 


<br></br>

                   <h4 className="text-3xl font-extrabold text-red-900"> 
                    Connect with Me on LinkedIn 
                   </h4>
                         <Link 
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                            to="https://www.linkedin.com/in/vikrant1912"   
                        >
                           
                        
                            LinkedIn
                            <svg
                                // fill="white"
                                 width="30"
                                 height="25"
                                // xmlns=""
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            {/* &nbsp;  */}       
                        </Link>
                        <br></br>

                    <h4 className="text-3xl font-extrabold text-green-900"> 
                    For Projects, My GitHub 
                   </h4>
                         <Link 
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-violet-700 rounded-lg hover:opacity-75"
                            to="https://github.com/vikrant-1912"   
                        >
                        
                            GitHub Profile
                            <svg
                                // fill="white"
                                 width="30"
                                 height="25"
                                // xmlns=""
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            {/* &nbsp;  */}       
                        </Link>
                        <br></br>

                         <h4 className="text-3xl font-extrabold text-blue-800"> 
                    My Social Media 
                   </h4>
                   <Link 
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-pink-700 rounded-lg hover:opacity-75"
                            to="https://instagram.com/vikrant_7017"   
                        >
                            Instagram
                            <svg
                                // fill="white"
                                 width="30"
                                 height="25"
                                // xmlns=""
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            {/* &nbsp;  */}       
                        </Link>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-150 h-100" src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" alt="image1" />
                </div>
            </aside>
            <h4 className="italic sm:text-black-100 text-3xl font-medium md:col-auto mx-1 my-1"> 📁Projects\ 💼Work </h4> <br></br>
            <h5 className="text-3xl font-bold text-blue-900">
                1. Amazon Clone 
            </h5>
            <p className="text-fuchsia-500">
                🛒 Amazon Clone – E-commerce UI (March 2025 – Present) <br></br> </p>
                <p>
                Built a fully responsive Amazon-style web app using HTML5, CSS3, and Vanilla JavaScript. The project mimics real-world e-commerce functionality like product listings, cart management, dynamic UI updates, and smooth user experience—without relying on any frameworks or libraries.
This clone highlights my skills in responsive web design, DOM manipulation, and pixel-perfect implementation, showcasing my ability to turn complex interfaces into functional code with Deployed on Vercel. <br></br>
Giving My Users a Smoothing experience like a Real - one , with Welcome Pop-up , Searching Filter , Add to cart Funtionality with Cart Count update , Cart Tab , Product Modal for description & Toggle Dark Mode ...and More features Coming Sooon.
            </p> <br></br>
            <p className="text-violet-600 text-2xl italic">What I Learned: </p>
Structuring large-scale HTML/CSS & JavaScript project. <br></br>

Creating reusable components in pure JavaScript.<br></br>

Designing for mobile-first and responsive behavior.<br></br>

            <br></br> <br></br>
            <h5 className="text-3xl font-bold text-blue-900">
                2. Tic-Tac-Toe 
            </h5>
            <p className="text-fuchsia-500">
                🛒 Tic-Tac-Toe - A UI Web Game (April 2025) <br></br> </p>
                <p>
                A classic Tic Tac Toe game built from scratch using HTML, CSS, and Vanilla JavaScript. Features include interactive game logic, win/draw detection, and a sleek UI. The project emphasizes JavaScript DOM manipulation, conditional logic, and responsive design, providing an engaging user experience across all devices. <br></br><br></br>
        <p className="text-violet-600 text-2xl italic">What I Learned: </p> 
        DOM traversal and manipulation. <br></br>

       Implementing game logic and win conditions. <br></br>

       Structuring code using clean, modular JS.
            </p>
            <br></br> <br></br>

            <h5 className="text-3xl font-bold text-blue-900">
                3. Currency Convertor App ( Fetch API) 
            </h5>
            <p className="text-fuchsia-500">
                💱 A Currency Convertion Using API (April 2025) <br></br> </p>
                <p> 
                A responsive currency conversion web application built using HTML5, CSS3, and JavaScript. Utilizes the Fetch API to retrieve real-time exchange rates from a third-party API. The app features a clean UI, dynamic dropdowns for currency selection, and accurate conversion results based on live data.
Demonstrates proficiency in API integration, asynchronous JavaScript, and responsive UI design. <br></br> <br></br>
 <p className="text-violet-600 text-2xl italic">What I Learned: </p>
Working with external REST APIs. <br></br>

Handling JSON responses and asynchronous logic with fetch(). <br></br>

Building clean, responsive, user-friendly interfaces. <br></br>

            </p>
            <br></br> <br></br>

             <h5 className="text-3xl font-bold text-blue-900">
                4. ⚛️React.js , 🔀React-Router & 🔄Redux Mini Projects Journey (May 2025 – Present) 
            </h5>
            <p> 
                Gained a strong foundational understanding of React.js by actively learning and implementing key concepts such as JSX, Props, State, Hooks, Conditional Rendering, and Component Lifecycle.<br></br> 
                Built several Mini-projects to master Frontend Development Skills by Learning and implementing each concept of React js , React-Router ( My SPA App) & Redux (for State Management). <br></br> <br></br>

     <p className="text-violet-600 text-2xl italix">Mini Projects including: </p>
🚀 First React App (Create React App to Vite Migration) – Built an interactive UI project using CRA, then migrated it to Vite for faster performance and modular development.<br></br>
🎨 Background Color Changer – Demonstrates use of props and dynamic UI updates. <br></br>

🧩 Card Component UI (Props + Tailwind CSS) – A visually appealing card design component showcasing prop-driven content updates with Tailwind for styling and layout responsiveness.<br></br>

🔐 Password Generator – Built with useState, event handling, and custom hooks. <br></br>

🔢 Counter App – Shows clean implementation of useState and reusable components. <br></br>

💱 Currency Converter (React + Custom Hooks) – A responsive app fetching real-time exchange rates, built with a custom hook to separate API logic and ensure reusable, clean architecture.<br></br>

</p>
<br></br>
<h4 className="italic sm:text-black-100 text-3xl font-medium md:col-auto mx-1 my-1">🎓Internships\🧑‍💼Certifications </h4> <br></br>
            <h5 className="text-3xl font-bold text-blue-900"></h5>

<h5 className="text-3xl font-bold text-blue-900">
                1. AICTE Eduskills Academy – Web Full Stack Virtual Internship 
            </h5>

<p className="text-violet-600 text-2xl italic">Duration: Oct 2024 – Dec 2024
 </p>
 <p>
    Completed a structured virtual internship covering the fundamentals of full stack web development including HTML, CSS, JavaScript, frontend-backend integration, and hands-on project work.
 </p>
<br></br>

 <h5 className="text-3xl font-bold text-blue-900">
                2. Google for Developers – AI-ML Virtual Internship 
            </h5>

<p className="text-violet-600 text-2xl italic">Duration: Jan 2025 – Mar 2025
 </p>
 <p>
    Gained practical experience in core AI and Machine Learning concepts using Python. Participated in real-world problem-solving tasks and collaborative model-building projects under Google’s AI-ML curriculum.

 </p> <br></br>

 <h5 className="text-3xl font-bold text-blue-900">
                3. NPTEL Entrepreneurship Course & Exam
            </h5>

<p className="text-violet-600 text-2xl italic">Duration: July 2024 – Nov 2024
 </p>
 <p>
    Successfully completed a government-certified Entrepreneurship course. Appeared for the final offline exam Held in Delhi Centre and received an E Grade for "Exploratory Excellence", recognizing extended learning efforts.
 </p>
<br></br>
 <h5 className="text-3xl font-bold text-blue-900">
                4.Eduskills Academy – Python Full Stack Web Developer Internship
            </h5>

<p className="text-violet-600 text-2xl italic">Duration: April 2025 – June 2025
 </p>
 <p>
   Completed training in full stack Python development including Django, REST APIs, and frontend/backend integration. Received course completion certificate; & Also, My internship certificate will be issued after June 1st, 2025.
 </p>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-100 w-50" src="https://as1.ftcdn.net/v2/jpg/02/14/87/96/1000_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-violet-400 text-2xl sm:text-5xl py-10 font-medium">Vikrant Khatana , Software Developer</h1>
        </div>
    );
}
