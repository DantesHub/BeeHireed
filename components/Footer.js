import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='bg-white'>
        <div className='row padding-left-right-twelve-percent padding-top-bottom-150px'>
          <div className='col-lg-2 col-md-6 col-sm-12 center-col col-xs-12 md-margin-bottom-25px text-left sm-text-center'>
            <h6 className='text-gray-dark text-extra-large text-weight-700'>
              Social.
            </h6>
            <ul className='list-unstyled no-margin md-margin-left-right-auto'>
              <li className='no-margin md-text-center'>
                <p className='text-gray-dark'>
                  <a className='text-gray-dark' href='#'>
                    <span
                      className='facebook position-relative bottom-1 margin-right-10px'
                      data-uk-icon='icon: facebook; ratio: .7'
                    ></span>{" "}
                    Facebook
                  </a>
                </p>
              </li>
              <li className='no-margin'>
                <p className='text-gray-dark'>
                  <a className='text-gray-dark' href='#'>
                    <span
                      className='instagram position-relative bottom-1 margin-right-10px'
                      data-uk-icon='icon: instagram; ratio: .7'
                    ></span>{" "}
                    Instagram
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12 center-col col-xs-12 md-margin-bottom-75px text-left sm-text-center'>
            <h6 className='text-gray-dark text-extra-large text-weight-700'>
              Sitemap.
            </h6>
            <ul className='list-unstyled no-margin'>
              <li className='no-margin'>
                <p className='text-gray-dark'>
                  <a className='text-gray-dark' href='#'>
                    Home
                  </a>
                </p>
              </li>
              <li className='no-margin'>
                <p className='text-gray-dark no-margin-bottom'>
                  <a className='text-gray-dark' href='#'>
                    Blog
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 center-col col-xs-12 text-left'>
            <h6 className='text-gray-dark text-extra-large text-weight-700'>
              Contact.
            </h6>
            <p className='position-relative bottom-1 margin-right-10px  text-extra-large'>
              support@beehired.io
            </p>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
