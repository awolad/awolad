import './css/services.css'

function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <h2 className="section-title wow fadeInUp">Services</h2>
          <div className="spacer" data-height="60"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box rounded data-background padding-30 text-center text-light shadow-yellow"
                data-color="#F9D74C">
                <img src="/assets/images/service-2.svg" alt="UI/UX design" />
                <h3 className="mb-3 mt-0">Web Development</h3>
                <p className="mb-0">I develop both frontend and backend. I use Laravel, Serverless, React, and Vue.
                </p>
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-4">
              <div className="service-box rounded data-background padding-30 text-center shadow-blue" data-color="#6C6CE5">
                <img className="alexa-skill" src="/assets/images/service-alexa.png" alt="UI/UX design" />
                <h3 className="mb-3 mt-0">Alexa Skill</h3>
                <p className="mb-0">I develop Alexa skills using core node.js SDK. I also use the Jovo framework.</p>
              </div>
              <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>
            <div className="col-md-4">
              <div className="service-box rounded data-background padding-30 text-center text-light shadow-green"
                data-color="#2a8943">
                {/* F97B8B */}
                <img className="google-action" src="/assets/images/service-google-action.png" alt="UI/UX design" />
                <h3 className="mb-3 mt-0">Google Action</h3>
                <p className="mb-0">I develop Google action using core node.js SDK. I also use Jovo framework.</p>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <p className="mb-0">Looking for a custom job? <a href="#contact">Click here</a> to contact me! 👋</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
