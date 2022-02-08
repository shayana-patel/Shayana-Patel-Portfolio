import React from 'react'

const About = () => {
  return (
    <>
      <section id='about-section'>
        <div className="container-fluid bg-1 text-center">
          <h1 className="margin section-title">About Me</h1>
          <img src="./server/public/shayana-profile.png" id='profile-img' className="img-fluid margin" alt="Shayana profile photo"/>
          <h3>Full Stack Software Developer</h3>
          <p>
            I am a software developer, based in Wellington, NZ. I recently switched careers from biomedical and
            laboratory sciences to pursue exciting opportunities in the tech industry. I am enthusiastic about
            creating products that have a positive and valuable impact on users' lives and enjoy learning about new
            and innovative technologies. Outside of work I love to travel and go hiking; I wind down by reading,
            solving puzzles and spending time with family and friends.
          </p>
        </div>
      </section>
    </>
  )
}

export default About