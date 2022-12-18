import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <container className='square-container'>
        <div className='rectangle'/>
      <header>
      {/* <svg width="500" height="220">
  <rect className='rectangle-ab' x="50" y="20" rx="20" ry="20" width="400" height="200" />
 </svg> */}
 <h1 className='myName'>Chinmay Bhole</h1>
        <h3 className='myPosition'>Full Stack Developer</h3>
        
      </header>
      </container>
      

      <div class="grid-container">
        <div class="grid-item contact">
        <div class = "vertical"></div>
          <h3>contact</h3>
          <hr/>
          <ul>
          <a href='https://github.com/chinmaybhole'>Github</a>
          <br/>
          <a href='https://www.linkedin.com/in/chinmay-bhole-193182222/'>linkedin</a>
          </ul>
          <hr/>

          </div>
        <div class="grid-item summary">
          <h3>summary</h3>
          <hr/>

          <p>
            Full Stack Developer well versed with MERN and Django Stack
          </p>
          <hr/>

          </div>
        <div class="grid-item education">
          <h3>education</h3>
          <hr/>

          <ul>
          <h4 className='degreename'>
          Bachelor of Technology: Electronics And Telecommunication
              </h4>
              <h5 className='schoolname'>
              K J Somaiya Institute of Engineering and Information Technology - Sion, Mumbai
                </h5>
                <h5 className='date'>
                2019-08 - Current
                </h5>
            <h4 className='degreename'>
            Higher School Certificate
              </h4>
              <h5 className='schoolname'>
              Thakur Vidhya Mandir High School And Jr College - Mumbai
                </h5>
                <h5 className='date'>
                2018-2019 
                </h5>
            <h4 className='degreename'>
            Secondary School Certificate
            </h4>
              <h5 className='schoolname'>
              Shanti nagar high school - Mumbai
                </h5>
                <h5 className='date'>
                2016-2017
                </h5>

          </ul>
          <hr/>

         


          </div>
        <div class="grid-item experience">
          <h3>experience</h3>
          <hr/>
          <h4 className='positionname'>
          Full Stack developer
          </h4>

          <h5 className='companyname'>
          Selec Controls Ltd. | Mumbai
          </h5>

          <ul>
            <li>
            Creating API, integrating for One for All Maintenance application project.
            </li>
            <li>
            Worked with customers to understand their needs and provide excellent service.
            </li>
            <li>
            Developed and maintained courteous and effective working relationships.
            </li>
            <li>
            Onboarded new temps by entering employee information into systems.
            </li>
            <li>
            Participated in team-building activities to enhance working relationships.
            </li>
            <li>
            Technologies use - MERN stack is being used for the entire project.
            </li>
          </ul>


          <h4 className='positionname'>
          Software Team Manager
            </h4>
            <h5 className='companyname'>
            New Leap Initiative | KJSIEIT Mumbai

          </h5>
            <ul>
              <li>
              Collaborated with team members to achieve target results.
              </li>
              <li>
              Prepared variety of different written communications, reports and documents.
              </li>
              <li>
              Demonstrated respect, friendliness and willingness to help wherever needed.
              </li>
              <li>
              Updated old code bases to modern development standards, improving functionality.
              </li>
              <li>
              Discussed issues with team members to provide resolution and apply best practices.
              </li>
              <li>
              Working Technologies : Python Flask, Django, HTML, CSS, Javascript, MySql
              </li>

            </ul>

          <h4 className='positionname'>
            Machine Learning Engineering
            </h4>
            <h5 className='companyname'>
            Nehru Science Centre (NSC) | Mumbai
</h5>
            <ul>
              <li>
              Creating a application to convert sketches to pictures using convolutional neural network.
              </li>
              <li>
Prototyped machine learning applications and quickly determined application viability.
</li>
<li>
Created customized applications to make critical predictions, automate reasoning and decisions and calculate optimization algorithms.
</li>
<li>
Transformed raw data to conform to assumptions of machine learning algorithm.
</li>
<li>
Developed advanced graphic visualization concepts to map and simplify analysis of heavily-numeric data and reports.
</li>
            </ul>

            <hr/>

          </div>
        <div class="grid-item skills">
          <h3>skills</h3>
          <hr/>
          <ul>
            <li>
            API design knowledge
            </li>
            <li>
            Nodejs
            </li>
            <li>
            Python
            </li>
            <li>
            ReactJs
            </li>
            <li>
            Sql Integration
            </li>
            <li>
            Software development
            </li>
            <li>
            NoSQL
            </li>
            <li>
            HTML/CSS
            </li>
          </ul>
          <hr/>

          
          </div>
        {/* <div class="grid-item interest">
          <h3>interest</h3>
          <hr/>

          </div>
        <div class="grid-item contactme">
          <h3>contactme</h3>
          <hr/>

          </div> */}
     

      </div>

    </div>
  )
}

export default App