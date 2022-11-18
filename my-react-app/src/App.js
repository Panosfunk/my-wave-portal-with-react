import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="w3-black">

    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{width: '100%'}} />
      <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
        <i className="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </a>
      <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-user w3-xxlarge"></i>
        <p>ABOUT</p>
      </a>
      <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-eye w3-xxlarge"></i>
        <p>PHOTOS</p>
      </a>
      <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-envelope w3-xxlarge"></i>
        <p>CONTACT</p>
      </a>
    </nav>

    <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <a href="#" className="w3-bar-item w3-button" style={{width: '25% !important'}}>HOME</a>
        <a href="#about" className="w3-bar-item w3-button" style={{width: '25% !important'}}>ABOUT</a>
        <a href="#photos" className="w3-bar-item w3-button" style={{width: '25% !important'}}>PHOTOS</a>
        <a href="#contact" className="w3-bar-item w3-button" style={{width: '25% !important'}}>CONTACT</a>
      </div>
    </div>

    <div className="w3-padding-large" id="main">
      <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Ilias Avra.</h1>
        <p>Photographer and Web Designer.</p>
        <img src="https://www.w3schools.com/w3images/man_smoke.jpg" alt="boy" className="w3-image" width="992" height="1108" />
      </header>

      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">Who am I anyway?</h2>
        <hr style={{width: '200px'}} className="w3-opacity" />
        <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <p className="w3-wide">Photography</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height: '28px', width: '95%'}}></div>
        </div>
        <p className="w3-wide">Web Design</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height: '28px', width: '85%'}}></div>
        </div>
        <p className="w3-wide">Photoshop</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height: '28px', width: '80%'}}></div>
        </div>
        <p className="w3-wide">Montage</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{height: '28px', width: '90%'}}></div>
        </div><br />
        
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span><br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span><br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span><br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span><br />
            Meetings
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
        
        <h3 className="w3-padding-16 w3-text-light-grey">What I can offer you</h3>
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Learn more</button>
              </li>
            </ul>
          </div>

          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black">Learn more</button>
              </li>
            </ul>
          </div>
        </div>
        
        <h3 className="w3-padding-24 w3-text-light-grey">What people say about me</h3>  
        <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '80px'}} />
        <p><span className="w3-large w3-margin-right">Chris Cox.</span> CEO at Mighty Schools.</p>
        <p>John Doe saved us from a web disaster.</p><br />
        
        <img src="https://www.w3schools.com/w3images/avatar_g2.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: '80px'}} />
        <p><span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
        <p>No one is better than John Doe.</p>
      </div>
      
      <div className="w3-padding-64 w3-content" id="photos">
        <h2 className="w3-text-light-grey">My Photos</h2>
        <hr style={{width: '200px'}} className="w3-opacity" />

        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width: '100%'}} />
            <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{width: '100%'}}  />
            <img src="https://www.w3schools.com/w3images/sailboat.jpg" style={{width: '100%'}}  />
          </div>

          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{width: '100%'}}  />
            <img src="https://www.w3schools.com/w3images/chef.jpg" style={{width: '100%'}}  />
            <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{width: '100%'}}  />
            <img src="https://www.w3schools.com/w3images/p6.jpg" style={{width: '100%'}}  />
          </div>
        </div>
      </div>

      <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey">Contact Me</h2>
        <hr style={{width: '200px'}}  className="w3-opacity" />

        <div className="w3-section">
          <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
          <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
          <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
        </div><br />
        <p>Let's get in touch. Send me a message:</p>

        <form action="/action_page.php" target="_blank">
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
          <p>
            <button className="w3-button w3-light-grey w3-padding-large" type="submit">
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
      
    <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-facebook-official w3-hover-opacity"></i>  
      </a>
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-instagram w3-hover-opacity"></i>
      </a>
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-snapchat w3-hover-opacity"></i>
      </a>
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
      </a>
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-twitter w3-hover-opacity"></i>
      </a>
      <a style={{textDecoration: 'none'}} href="https://www.google.com">
        <i className="fa fa-linkedin w3-hover-opacity"></i>
      </a>
    </footer>

    </div>

  </div>
  );
}

export default App;