import React from 'react'

function Footer() {
  return (
    <div>
         <div>
  {/* Contact*/}
  <section className="page-section" id="contact">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      {/* * * * * * * * * * * * * * * **/}
      {/* * * SB Forms Contact Form * **/}
      {/* * * * * * * * * * * * * * * **/}
      {/* This form is pre-integrated with SB Forms.*/}
      {/* To make this form functional, sign up at*/}
      {/* https://startbootstrap.com/solution/contact-forms*/}
      {/* to get an API token!*/}
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              {/* Name input*/}
              <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="form-group">
              {/* Email address input*/}
              <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            <div className="form-group mb-md-0">
              {/* Phone number input*/}
              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              {/* Message input*/}
              <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
          </div>
        </div>
        {/* Submit success message*/}
        {/**/}
        {/* This is what your users will see when the form*/}
        {/* has successfully submitted*/}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center text-white mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
          </div>
        </div>
        {/* Submit error message*/}
        {/**/}
        {/* This is what your users will see when there is*/}
        {/* an error submitting the form*/}
        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
        {/* Submit Button*/}
        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
      </form>
    </div>
  </section>
  {/* Footer*/}
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">Copyright © Your Website 2023</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
          <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
  {/* Portfolio Modals*/}
  {/* Portfolio item 1 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Threads
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Illustration
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 2 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Explore
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Graphic Design
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 3 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Finish
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Identity
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 4 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Lines
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Branding
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 5 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Southwest
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Website Design
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 6 modal popup*/}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Window
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Photography
                  </li>
                </ul>
                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

    </div>
  )
}

export default Footer