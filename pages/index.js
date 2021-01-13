import React from "react";
import Image from "next/image";
import Head from "next/head";

const landing = () => {
  return (
    <React.Fragment>
      <div
        class='uk-position-relative uk-visible-toggle'
        data-uk-slider='finite: true'
      >
        <ul
          class='uk-slider-items uk-child-width-1-2@m uk-grid uk-grid-small'
          data-uk-height-viewport
        >
          <li class='uk-transition-toggle uk-animation-toggle overflow-hidden sm-hidden'>
            <div class='uk-position-center'>
              <div class='width-100 margin-left-auto sm-width-100'>
                <img
                  src='images/backgrounds/bg-01.png'
                  alt='job application automation'
                />
              </div>
            </div>
          </li>

          <li class='uk-transition-toggle uk-animation-toggle overflow-hidden'>
            <div class='uk-position-cover'>
              <div class='uk-position-center text-left'>
                <div class='width-70 margin-auto'>
                  <h2 class='text-weight-700 text-gray-dark bee-title'>
                    Stay connected with your friends with softop.
                  </h2>
                  <p class='text-gray-regular'>
                    The project management software that keeps teams going.
                    Collaborate as if you were right next to each other.
                  </p>

                  <img
                    class='margin-bottom-25px'
                    src='images/separator.png'
                    alt=''
                  />

                  <div class='form-group'>
                    <input
                      class='form-control form_lastname bg-transparent no-border-top no-border-left no-border-right border-color-gray-extra-light border-3px padding-10px text-gray-dark text-weight-400 width-70 sm-width-100'
                      type='text'
                      name='name'
                      placeholder='Email'
                      required='required'
                      data-error='Lastname is required.'
                    />
                  </div>

                  <a
                    class='btn btn-large btn-gold sm-display-table no-margin-bottom'
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
        class='uk-position-center-left uk-position-small uk-hidden-hover left-minus-50'
        href='#'
        data-uk-slidenav-previous
        data-uk-slider-item='previous'
      ></a>
      <a
        class='uk-position-center-right uk-position-small uk-hidden-hover right-minus-50'
        href='#'
        data-uk-slidenav-next
        data-uk-slider-item='next'
      ></a>
      {/* Services */}
      <div id='features' class='padding-top-bottom-150px bg-gray-transparent'>
        <div class='container sm-container-spread'>
          <div class='row'>
            <div class='col-md-8 col-sm-12 col-xs-12 center-col text-center margin-auto'>
              <h2 class='text-weight-700 text-gray-dark'>
                Check out the features.
              </h2>

              <p class='text-gray-regular text-center'>
                The project management software that lorem ipsum and best to
                know that because it keeps teams going. Collaborate as if you
                were right next to each other.
              </p>

              <img class='margin-auto' src='images/separator.png' alt='' />
            </div>
          </div>
          <div class='row margin-top-75px'>
            <div class='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-margin-top-75px'>
              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-right margin-bottom-75px sm-text-center'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: move; ratio: 1.2'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Giveaways.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>

              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-right margin-bottom-75px sm-text-center'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: world; ratio: 1.2'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Global Stuff.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-right sm-text-center sm-margin-bottom-75px'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: database; ratio: 1.2'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Databases.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
            <div class='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto md-text-center'>
              <div class='sm-container-spread md-text-center'>
                <div class='width-100 margin-left-auto sm-width-100'>
                  <img
                    src='/images/backgrounds/bg-02.png'
                    alt=''
                    width='350'
                    height='780'
                  />
                </div>
              </div>
            </div>
            <div class='col-md-4 col-sm-12 col-xs-12 center-col text-left margin-auto sm-margin-top-75px'>
              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-left margin-bottom-75px sm-text-center'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: receiver; ratio: 1.5'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    24/7 support.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-left margin-bottom-75px sm-text-center'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: pull; ratio: 1.5'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    Unlimited Downloads.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
                    As opposed to using 'Content here, content here', making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 col-sm-12 col-xs-12 text-left sm-text-center'>
                  <span
                    class='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: cog; ratio: 1.5'
                  ></span>

                  <h6 class='text-gray-dark text-extra-large text-weight-700 margin-top-25px'>
                    1 Month Trial.
                  </h6>

                  <p class='text-gray-dark no-margin md-text-center'>
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
