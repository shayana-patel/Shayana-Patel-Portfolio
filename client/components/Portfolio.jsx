import React from 'react'

const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
        <div className="container-fluid bg-3 text-center">    
          <h2 className="margin">What I have done</h2><br />
          <div className="row">
            <div className="col-sm-4">
              <img src="https://i.picsum.photos/id/398/360/360.jpg?hmac=F0XPMiqlGExUEWgJFVCCmiYekW_mMzj9vGuAlRCBt4c" className="img-responsive margin" alt="Placeholder 1" />
              <h3>Project Title</h3>
              <p>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/441/360/360.jpg?hmac=Wod9wD8dvCKaczLBNtPu68V3s6DPQd0_XgdBpyD35fY" className="img-responsive margin" alt="Placeholder 2" />
              <h3>Project Title</h3>
              <p>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-sm-4"> 
              <img src="https://i.picsum.photos/id/538/360/360.jpg?hmac=yR7o_bl9E0Z0pRKmSeMorzAfKvdqQfK9q0dQs1Enme8" className="img-responsive margin" alt="Placeholder 3" />
              <h3>Project Title</h3>
              <p>
                Description of project - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="container-fluid bg-2 text-center">
          <h3 class="margin">What I have done</h3>
          <p>
            Below are some of my projects that I have done myself as well as in collaboration with others
          </p>
          <a href="#" class="btn btn-default btn-lg">
            <span class="glyphicon glyphicon-search"></span> Search
          </a>
        </div> */}
      </section>

      {/* <section id='portfolio'>
        <div className='container'>
          <div className='portfolio-title'>
            <h1>Portfolio Page</h1>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Portfolio