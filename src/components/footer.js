import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footercontainer">
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/sweety-kumari-38984012b/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://meta.stackoverflow.com/users/21661610/sweety-singh8/nishant-singh">
            <i className="fa-brands fa-stack-overflow"></i>
          </a>
          <a href="https://github.com/sweetysinghchandel">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/SWEETYSingh1427">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="footernav">
          <ul>
            <li>
              <span className="icon">
                {" "}
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true">
                    &nbsp;&nbsp;
                  </i>
                  sweetysingh.1412@gmail.com
                </a>
              </span>
            </li>
            <li>
              <span className="icon">
                {" "}
                <a href="">
                  <i className="fa fa-phone-square" aria-hidden="true">
                    &nbsp;&nbsp;
                  </i>
                  +91 9135160643
                </a>
              </span>
            </li>
            <li>
              <span className="icon">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true">
                    &nbsp;&nbsp;
                  </i>
                  Gurgaon,Haryana
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="footerbottom">
          <p>
            Copyight &copy; 2023 &nbsp;Designed By&nbsp;
            <span className="designer">Sweety</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
