import React from 'react'

const Portfolio = () => {
  return (
    <>
      <section id='portfolio-section'>  
        <div className="container-fluid bg-3 text-center">    
          <h1 className="margin section-title">Portfolio</h1><br />
          <div className="row">
            <div className="col-sm-3">
              <h2 className="project-title">Reminise</h2>
              <img src="./server/public/reminisce.PNG" className="img-responsive margin" alt="Reminisce web-app preview" />
              <p className='project-description'>
                Reminisce is a personal online memory-box of concerts and holiday memories. I began this project during my time at Enspiral Dev Academy and was able to utilize all the knowledge and experience that I had gained during the bootcamp to build this app. While creating this app I was able to create a database of my concert and travel data and make API calls from the client-side using Redux to retrieve the server-side information and display it on the webpage using React components. 
                <br/>
                Built using React, Redux, Express.js, Knex.js. 
              </p>
              <a href="http://reminiscetheapp.herokuapp.com/" target='_blank' className='project-title'>
                <button id="project-launch">Launch Project</button>
              </a>
            </div>  

            <div className="col-sm-3"> 
              <h2 className="project-title">PoliSay</h2>
              <img src="./server/public/polisay.PNG" className="img-responsive margin" alt="PoliSay web-app preview" />
              <p className='project-description'>
                Enspiral Dev Academy Final Project.
                <br/>
                Our 6 person team created an app to allow users to better engage in democracy and have their voice heard on policies/bills that Parliament are looking into. Policy experts can share their expertise by submitting a template submission, and users can easily select, amend, and put forward submissions that they agree with.
                <br/>
                We worked effectively as a team in a collaborative and supportive manner, while using all the knowledge we had aquired over the course of EDA to complete the project.
                <br/>
                Built using React, Redux, Node.js, Express.js, Knex.js.
              </p>
              <a href="http://polisay.herokuapp.com/" target='_blank' className='project-title'>
                <button id="project-launch">Launch Project</button>
              </a>
            </div>

            <div className="col-sm-3">
              <h2 className="project-title">The Boredom Buster</h2>
              <img src="./server/public/boredom-buster.PNG" className="img-responsive margin" alt="Boredom Buster web-app preview" />
              <p className='project-description'>
                A random activity generator for when you don't know what to do. I used <span><a href="https://www.boredapi.com" target="_blank">The Bored API</a></span> to create this app. I created the functions that make the API calls in client/api.js, and called those functions within the React component Generator.jsx. The creation of this app allowed me to practice using external web APIs.
                <br/>
                Built using JavaScript - React, Node.js Express.js.
              </p>
              <a href="https://the-boredom-buster.netlify.app/" target='_blank' className='project-title'>
                <button id="project-launch">Launch Project</button>
              </a>
            </div>
            
            <div className="col-sm-3">
              <h2 className="project-title">Pupparazzi</h2>
              <img src="./server/public/pupparazzi.PNG" className="img-responsive margin" alt="Pupparazzi web-app preview" />
              <p className='project-description'>
                This project was completed during week 2 of EDA Bootcamp. The learning objectives for completeing this project were to: learn Express router, practise using callback functions, and practise server side rendering
                <br/>
                Built using JavaScript, Handlebars, Express.js.
              </p>
              <a href="https://perfect-pup-pals.herokuapp.com/" target='_blank' className='project-title'>
                <button id="project-launch">Launch Project</button>
              </a>
            </div>

            <div className="col-sm-3">
              <h2 className="project-title">Meteorsweeper</h2>
              <img src="./server/public/Meteorsweeper.PNG" className="img-responsive margin" alt="Meterosweeper preview" />
              <p className='project-description'>
                My take on the classic game Minesweeper. This was my first attempt at building a game using JavaScript. All skills required to build this game were learnt during Enspiral Dev Academy Web Development Bootcamp - Foundations portion of the bootcamp. Step-by-step instructions were provided in the repo by EDA to help code this game. The objective of the game is to clear a square grid containing hidden meteors  without detonating any of them. Clearing safe squares will give you clues about the number of neighbouring mines. To win the game all meteors must be "flagged" and all the safe squares revealed.
                <br/>
                Built using JavaScript, HTML and CSS.  
              </p>
              <a href="https://shayana-patel.github.io/minesweeper/" target='_blank'className='project-title'>
              <button id="project-launch">Launch Project</button>
              </a>
            </div>

            <div className="col-sm-3">
              <h2 className="project-title">JavaScript Carnival</h2> 
              <img src="./server/public/js-carnival.PNG" className="img-responsive margin" alt="JavaScript Carnival preview" />
              <p className='project-description'>
                This project was completed during Sprint 5 of EDA Foundations. There are three games in the carnival: Inflate the Unicorn, Wack-a-Mole, and Dress the Clown. This aim was to get the games to work using our coding knowledge that we had learnt through our 5 weeks of EDA Foundations.
                <br/> 
                Built using JavaScript, HTML and CSS.
                <br/>
                <br/>
                Inflate the unicorn: These poor unicorns have balloons for horns. Inflate the balloons to get the horns to point up.
                <br/>
                <br/>
                Whack-a-Mole: The carnival classic brought to life right inside your very own web browser. Where did all the moles go?
                <br/>
                <br/>
                Dress the Clown: A dress-up game where you make a clown look fancy!
              </p>
              <a href="https://shayana-patel.github.io/javascript-carnival/" target='_blank' className='project-title'>
                <button id="project-launch">Launch Project</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio