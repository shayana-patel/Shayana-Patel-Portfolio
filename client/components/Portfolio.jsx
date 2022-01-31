import React from 'react'

const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>  
        <div className="container-fluid bg-3 text-center">    
          <h1 className="margin section-title">Recent Work</h1><br />
          <div className="row">
            <div className="col-sm-4">
              <img src="https://i.picsum.photos/id/398/360/360.jpg?hmac=F0XPMiqlGExUEWgJFVCCmiYekW_mMzj9vGuAlRCBt4c" className="img-responsive margin" alt="Placeholder 1" />
              <a href="https://shayana-patel.github.io/minesweeper/" target='_blank'className='project-title'>Meteorsweeper</a>
              <p className='project-description'>
                My take on the classic game Minesweeper. This was my first attempt at building a game using JavaScript. All skills required to build this game were learnt during Enspiral Dev Academy Web Development Bootcamp - Foundations portion of the bootcamp. Step-by-step instructions were provided in the repo by EDA to help code this game. The objective of the game is to clear a square grid containing hidden meteors  without detonating any of them. Clearing safe squares will give you clues about the number of neighbouring mines. To win the game all meteors must be "flagged" and all the safe squares revealed. Built using JavaScript, HTML and CSS.  
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/441/360/360.jpg?hmac=Wod9wD8dvCKaczLBNtPu68V3s6DPQd0_XgdBpyD35fY" className="img-responsive margin" alt="Placeholder 2" />
              <a href="http://reminiscetheapp.herokuapp.com/" target='_blank' className='project-title'>Reminisce</a>
              <p className='project-description'>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/538/360/360.jpg?hmac=yR7o_bl9E0Z0pRKmSeMorzAfKvdqQfK9q0dQs1Enme8" className="img-responsive margin" alt="Placeholder 3" />
              <a href="" target='_blank' className='project-title'>Project Title</a>
              <p className='project-description'>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio