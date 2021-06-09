function Prices() {
  return (
    <>
      <section id="prices">
        <div className="container">
          <h2 className="section-title wow fadeIn">Pricing Plans</h2>
          <div className="spacer" data-height="60"></div>
          <div className="row">
            <div className="col-md-4 pr-md-0 mt-md-4 mt-0">
              <div className="price-item bg-dark rounded shadow-light text-center">
                <img src="/assets/images/price-1.svg" alt="Regular" />
                <h2 className="plan">Basic</h2>
                <p>A Simple option but powerful to manage your business</p>
                <p>Email support</p>
                <h3 className="price"><em>$</em>800<span>Month</span></h3>
                <a href="#contact" className="btn btn-default">Get Started</a>
              </div>
            </div>
            <div className="col-md-4 px-md-0 my-4 my-md-0">
              <div className="price-item bg-dark rounded shadow-light text-center best">
                <span className="badge">Recommended</span>
                <img src="/assets/images/price-2.svg" alt="Premium" />
                <h2 className="plan">Premium</h2>
                <p>Unlimited product including apps integrations and more features</p>
                <p>Mon-Fri support</p>
                <h3 className="price"><em>$</em>2900<span>Month</span></h3>
                <a href="#contact" className="btn btn-default">Get Started</a>
              </div>
            </div>
            <div className="col-md-4 pl-md-0 mt-md-4 mt-0">
              <div className="price-item bg-dark rounded shadow-light text-center">
                <img src="/assets/images/price-3.svg" alt="Ultimate" />
                <h2 className="plan">Ultimate</h2>
                <p>A wise option for large companies and individuals</p>
                <p>24/7 support</p>
                <h3 className="price"><em>$</em>4900<span>Month</span></h3>
                <a href="#contact" className="btn btn-default">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Prices
