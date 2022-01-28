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
              <a href='https://shayana-patel.github.io/minesweeper/' target=
            '_blank'className='project-title'>Meteorsweeper</a>
              <p className='project-description'>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/441/360/360.jpg?hmac=Wod9wD8dvCKaczLBNtPu68V3s6DPQd0_XgdBpyD35fY" className="img-responsive margin" alt="Placeholder 2" />
              <a href='http://reminiscetheapp.herokuapp.com/' target='_blank' className='project-title'>Reminisce</a>
              <p className='project-description'>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/538/360/360.jpg?hmac=yR7o_bl9E0Z0pRKmSeMorzAfKvdqQfK9q0dQs1Enme8" className="img-responsive margin" alt="Placeholder 3" />
              <a href='' target='_blank' className='project-title'>Project Title</a>
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