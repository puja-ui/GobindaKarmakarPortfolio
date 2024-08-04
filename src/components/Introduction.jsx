import '../stylesheets/Introduction.css'
import profilePicture from '../assets/ProfilePicture.jpg'
import emailIcon from '../assets/email.svg'
import phoneIcon from '../assets/phone.svg'


const Introduction = () => {

  return (
    <>
      <div id="navlist">
        <img className='introItems' src={profilePicture} id="circularimage" />
        <span className='introItems'>
          <div className="containerP">
            <div className="container" id="">
              <div className='mainComponents'>
                <a href="#default" id="logo">
                  Dr. Gobinda Karmakar
                </a>
              </div>
              <div className='mainComponents'>
                <strong>M.Sc, B.Ed. Ph.D (Chemical Science)</strong>
              </div>
              <div className='mainComponents'>
                <p id="shouldHideWhenScrolled1">
                  <strong>Senior Researcher</strong><br /> at
                  Synthesis of Biolubricants and Multifunctional Additives for Lubricants
                  Department of Chemistry, University of North Bengal, Darjeeling-734013, West Bengal,
                  India</p>
              </div>
              <div className='mainComponents'>
                <p id="shouldHideWhenScrolled2">
                  <strong>Post Graduate Teacher</strong><br /> at
                  Department of Chemistry, Sri Narasingha Vidyapith (H.S.)
                  Darjeeling-734011, West Bengal, India</p>
              </div>
            </div>
          </div>
        </span>
        <table id="contacts">
          <tbody>
            <tr>
              <td><img className='icons' src={emailIcon} id="icons" /></td>
              <td><small id="smalltext1">gobinda.chem@gmail.com<br />gobinda.chem@rediffmail.com</small></td>
            </tr>
            <tr>
              <td><img className='icons' src={phoneIcon} id="icons" /></td>
              <td><small id="smalltext2">+91 9434608386<br />+91 7797063028</small></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Introduction
