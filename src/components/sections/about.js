import './css/about.css'

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className="section-title wow fadeInUp">About Me</h2>
          <div className="spacer" data-height="60"></div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-center text-md-left">
                <img className="about-me" src="/assets/images/awolad/awolad-saint-martin.jpg" alt="Awolad" />
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-9 triangle-left-md triangle-top-sm">
              <div className="rounded bg-dark shadow-light padding-30">
                <div className="row">
                  <div className="col-md-6">
                    <p>I am Awolad Hossain, full-stack developer from Dhaka, Bangladesh. I have rich experience in web site
                    design and building and customization, also I am good at cloud server management.</p>
                    {/* <div className="mt-3">
                      <a href="google.com" className="btn btn-default">Download CV</a>
                    </div> */}
                    <div className="spacer d-md-none d-lg-none" data-height="30"></div>
                  </div>
                  <div className="col-md-6">
                    {/* <div className="skill-item">
                      <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Front-end</h4>
                        <span className="float-right">85%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                          aria-valuenow="85" data-color="#FFD15C">
                        </div>
                      </div>
                      <div className="spacer" data-height="20"></div>
                    </div> */}
                    <div className="skill-item">
                      <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Full-stack</h4>
                        <span className="float-right">90%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                          aria-valuenow="90" data-color="#FF4C60">
                        </div>
                      </div>
                      <div className="spacer" data-height="20"></div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Alexa skill</h4>
                        <span className="float-right">95%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                          aria-valuenow="95" data-color="#2DC6F7">
                        </div>
                      </div>
                      <div className="spacer" data-height="20"></div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Google action</h4>
                        <span className="float-right">95%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                          aria-valuenow="95" data-color="#F3B605">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer" data-height="70"></div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="fact-item">
                <span className="icon icon-fire"></span>
                <div className="details">
                  <h3 className="mb-0 mt-0 number"><em className="count">116</em></h3>
                  <p className="mb-0">Projects completed</p>
                </div>
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fact-item">
                <span className="icon icon-cup"></span>
                <div className="details">
                  <h3 className="mb-0 mt-0 number"><em className="count">5670</em></h3>
                  <p className="mb-0">Cup of coffee</p>
                </div>
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fact-item">
                <span className="icon icon-people"></span>
                <div className="details">
                  <h3 className="mb-0 mt-0 number"><em className="count">13</em></h3>
                  <p className="mb-0">Satisfied clients</p>
                </div>
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="fact-item">
                <span className="icon icon-badge"></span>
                <div className="details">
                  <h3 className="mb-0 mt-0 number"><em className="count">35</em></h3>
                  <p className="mb-0">Nominees winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
