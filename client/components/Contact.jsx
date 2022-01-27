import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div id='container'>
          <div className='section-title'>
            <h1>Get in touch</h1>
          </div>
          <div className='section-body'>
            <p>
              You can reach me via email or find me on social networks. I would love to hear from you!
            </p>
          </div>
          <div className='contact-links'>
            <a href='mailto:shayana_patel@hotmail.com' title="Email Shayana">Email
              {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZflUSMAyHm6OzUA5SDAWELxe1T6sOE8aIg&usqp=CAU' alt='Email Shayana'></img> */}
            </a>
            <a href='https://github.com/shayana-patel' target='_blank' title="Shayana's GitHub">GitHub
              {/* <img src='https://vijaysutrave.com/github.515c4499.png' alt='github' /> */}
            </a>
            <a href='https://www.linkedin.com/in/shayana-patel-6367b9139/' target='_blank' title="Shayana's LinkedIn">LinkedIn
              {/* <img src='https://w7.pngwing.com/pngs/93/587/png-transparent-linkedin-logo-linkedin-logo-computer-icons-business-symbol-linkedin-icon-miscellaneous-blue-angle-thumbnail.png' alt='linkedin'></img> */}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact