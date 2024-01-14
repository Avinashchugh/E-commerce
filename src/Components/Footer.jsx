import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small pt-4" style={{ backgroundColor: '#FBFBFB' }}>
        <div className="container-fluid text-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-center">
              <h4>Company Info</h4>
              <ul className="" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#!" className="text-dark">
                    About US
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Latest Post
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Contact US
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h4>HelpFull Links</h4>
              <ul className="" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#!" className="text-dark">
                    Traking
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Order Status
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    FAQ
                  </a>
                </li>
                      </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 d-flex flex-column">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h4 className="mb-0">Useful Links</h4>
    {/* Input field for adding email */}
    <input 
      type="email" 
      name="add email" 
      placeholder="Add Email" 
      className="form-control" 
    />
  </div>
  <ul className="list-unstyled mb-0">
    <li className="mb-2">
      <a href="#!" className="text-dark text-decoration-none">
        Web Design
      </a>
    </li>
    <li className="mb-2">
      <a href="#!" className="text-dark text-decoration-none">
        Special Offers
      </a>
    </li>
    <li className="mb-2">
      <a href="#!" className="text-dark text-decoration-none">
        Gift Cards
      </a>
    </li>
    <li className="mb-2">
      <a href="#!" className="text-dark text-decoration-none">
        Advertising
      </a>
    </li>
    <li className="mb-2">
      <a href="#!" className="text-dark text-decoration-none">
        Terms of Use
      </a>
    </li>
  </ul>
</div>

              
          </div>
          {/* <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="">GET IN THE KNOW</h4>
              <ul className="" style={{ listStyleType: "none" }}>
                <li>
                  <input type="text" placeholder="Enter a Email"/>
                </li>
                </ul>
             </div>  */}
        </div>
        <hr className="clearfix w-100 pb-0" />

        <div className="footer-copyright text-center py-3 my-5">
          © {new Date().getFullYear()}FasTech Systems Private Limited Sukkur : 
          <p>Privacy Policy  Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;