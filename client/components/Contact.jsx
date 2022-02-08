import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div id='container'>
          <div className='margin section-title'>
            <h1>Contact</h1>
          </div>
          <div className='section-body'>
            <p>
              You can reach me via email or find me on social networks. I would love to hear from you!
            </p>
          </div>
          <div className='social-links'>
            <a
              className="social-button"
              href='mailto:shayana_patel@hotmail.com'
              title="Email Shayana"
              >
                <i className="fa fa-envelope"></i>
            </a>

            <a
              className="social-button"
              href="https://github.com/shayana-patel"
              target="_blank" 
              title="Shayana's GitHub"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
              className="social-button"
              href="https://www.linkedin.com/in/shayana-patel-6367b9139/"
              target="_blank" 
              title="Shayana's LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact