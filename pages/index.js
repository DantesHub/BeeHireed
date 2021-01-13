import React from "react";
import Image from "next/image";
import Head from "next/head";

const landing = () => {
  return (
    <React.Fragment>
      <div
        className='uk-position-relative uk-visible-toggle'
        data-uk-slider='finite: true'
      >
        <ul
          className='uk-slider-items uk-child-width-1-2@m uk-grid uk-grid-small'
          data-uk-height-viewport
        >
          <li className='uk-transition-toggle uk-animation-toggle overflow-hidden sm-hidden'>
            <div className='uk-position-center'>
              <div className='width-100 margin-left-auto sm-width-100'>
                <img
                  src='images/backgrounds/bg-01.png'
                  alt='job application automation'
                />
              </div>
            </div>
          </li>

          <li className='uk-transition-toggle uk-animation-toggle overflow-hidden'>
            <div className='uk-position-cover'>
              <div className='uk-position-center  text-left'>
                <div className='width-70 margin-auto'>
                  <h2 className='text-weight-700 text-gray-dark bee-title'>
                    Stay connected with your friends with softop.
                  </h2>
                  <p className='text-gray-regular'>
                    The project management software that keeps teams going.
                    Collaborate as if you were right next to each other.
                  </p>

                  <img
                    className='margin-bottom-25px'
                    src='images/separator.png'
                    alt=''
                  />

                  <div className='form-group'>
                    <input
                      className='form-control form_lastname bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-light border-3px padding-10px text-gray-dark text-weight-400 width-70 sm-width-100'
                      type='text'
                      name='name'
                      placeholder='Email'
                      required='required'
                      data-error='Lastname is required.'
                    />
                  </div>

                  <a
                    className='btn btn-large btn-gold sm-display-table no-margin-bottom'
                    href='#'
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <a
        className='uk-position-center-left uk-position-small uk-hidden-hover left-minus-50'
        href='#'
        data-uk-slidenav-previous
        data-uk-slider-item='previous'
      ></a>
      <a
        className='uk-position-center-right uk-position-small uk-hidden-hover right-minus-50'
        href='#'
        data-uk-slidenav-next
        data-uk-slider-item='next'
      ></a>
      {/* Services */}
      <div
        id='features'
        className='padding-top-bottom-150px bg-gray-transparent'
      >
        <div className='container sm-container-spread'>
          <div className='row'>
            <div className='col-md-8 col-sm-12 col-xs-12 center-col text-center margin-auto'>
              <h2 className='text-weight-700 text-gray-dark'>
                Check out the features.
              </h2>

              <p className='text-gray-regular text-center'>
                The project management software that lorem ipsum and best to
                know that because it keeps teams going. Collaborate as if you
                were right next to each other.
              </p>

              <img className='margin-auto' src='images/separator.png' alt='' />
            </div>
          </div>
          <div className='row margin-top-75px'>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-margin-top-75px'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-right margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: move; ratio: 1.2'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Giveaways.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-right margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: world; ratio: 1.2'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Global Stuff.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-right sm-text-center sm-margin-bottom-75px'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: database; ratio: 1.2'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Databases.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto md-text-center'>
              <div className='sm-container-spread md-text-center'>
                <div className='width-100 margin-left-auto sm-width-100'>
                  <Image
                    src='/images/backgrounds/bg-02.png'
                    alt=''
                    width='350'
                    height='780'
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-margin-top-75px'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-left margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: receiver; ratio: 1.5'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    24/7 support.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-left margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: pull; ratio: 1.5'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Unlimited Downloads.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-left sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: cog; ratio: 1.5'
                  ></span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    1 Month Trial.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default landing;
