import React from 'react'

const About = () => {
  return (
    <>
      <section id='about'>
        <div className="container-fluid bg-1 text-center">
          <h1 className="margin section-title">Get to know me!</h1>
          <img src="./server/public/shayana-profile.png" id='profile-img' className="img-fluid margin" alt="Shayana profile photo"/>
          <h3>Full Stack Software Developer</h3>
          <p>
          I am a full stack software developer based in Wellington, New Zealand. I previously worked in the biomedical and laboratory science industry and decided to make a switch in to pursue a career in the tech industry. I have an enthusiasm for creating products that will have positive and valuable impact, and also have a great desire to learn about new technologies. My personal interests include hiking and spending time with family and friends.
          </p>
        </div>
      </section>
    </>
  )
}

export default About