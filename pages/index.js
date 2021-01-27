import React from "react";
import Image from "next/image";
import Head from "next/head";
import ConvertKitForm from "convertkit-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faUserEdit,
  faCoffee,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const landing = () => {
  const config = {
    formId: 1953517,
    template: "clare",
    hideName: true,
    emailPlaceholder: "Enter an email address",
    submitText: "Sign Up For The FREE Beta",
  };
  return (
    <React.Fragment>
      <div className=' margin-bottom-150px'>
        <ul className='flex-hired'>
          <li className='hired-column center-col'>
            <img
              src='images/backgrounds/bg-01.png'
              alt='job application autofill'
              className='landing-image'
            />
          </li>

          <li className='overflow-hidden hired-column center-col'>
            <div className='christmas'>
              <h2 className='text-weight-700 text-gray-dark bee-title margin-none'>
                Land Your Dream Job Faster.
              </h2>
              <p className='text-gray-regular text-extra-large'>
                Finding a job or internship is messy, repetitive, and consumes a
                lot of time. With Hirebee, save and filter all your jobs in one
                organized place, and finish applying with a click of a button.
                Unlock a new level of time and peace.
              </p>
              <img
                className='margin-bottom-25px '
                src='images/separator.png'
                width='200'
                height='50'
                className='squiggle'
                alt=''
              />
              <div className='convert-form'>
                <ConvertKitForm {...config} />
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
      <div className=' bg-gray-transparent padding-top-50px padding-bottom-50px'>
        <div className='container-2 margin-top-50px'>
          <div>
            <h2 className='text-center text-weight-600 bee-title '>
              🐝. Search, filter and keep track of all your applications in one
              clean space.
            </h2>
            <img
              src='/images/main-features-page.png'
              className='margin-25px'
            ></img>
            <h2 className='text-center text-weight-600 margin-top-100px bee-title  '>
              ⚡️ Finish Applying In Seconds Using Our Chrome Extension.
            </h2>
            <img
              src='/images/auto-fill-feature.png'
              className='margin-bottom-50px'
            ></img>
          </div>
        </div>
      </div>
      <div id='features' className='padding-top-bottom-100px '>
        <div className='container-2'>
          <div className='row'>
            <div className='col-md-8 col-sm-12 col-xs-12 center-col text-center margin-auto'>
              <h2 className='text-weight-700 text-gray-dark'>
                Check out the features.
              </h2>
              <p className='text-gray-regular text-center'>
                With Beehired, rest assured that instead of spending hours on
                the application process, your instead honing your skills and
                increasing your value.
              </p>
              <img className='margin-auto' src='images/separator.png' alt='' />
            </div>
          </div>
          <div className='row margin-top-75px'>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-lt margin-auto sm-margin-top-75px'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-rt margin-bottom-75px sm-text-center overflow-visible'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-60 text-center border-radius-100 overflow-visible lightning'
                    data-uk-icon='icon: move; ratio: 1.4'
                  >
                    <img
                      src='/images/icons/lightning.png'
                      width='30'
                      height='30'
                      className='margin-top-5px margin-left-10px '
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-none'>
                    Apply in Seconds.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    With the combination of our autofiller and job filter, get
                    your dream job faster.
                  </p>
                </div>
              </div>

              <div className='row feature-row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-rt margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: pull; ratio: 1.5'
                  >
                    <img
                      src='/images/icons/clock-solid.svg'
                      width='30'
                      height='30'
                      className='margin-top-10px margin-left-10px padding-3px'
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-top-25px margin-none'>
                    Save Hours.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    Your time is precious. Spend more time doing the things that
                    matter.
                  </p>
                  <br />
                </div>
              </div>
              <div className='row feature-row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-rt sm-text-center sm-margin-bottom-75px'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: database; ratio: 1.2'
                  >
                    <img
                      src='/images/icons/user-friends-solid.svg'
                      width='30'
                      height='30'
                      className='margin-top-10px margin-left-10px'
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-none'>
                    Community.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    Gain access to our private discord community of fellow job
                    hunters. You're never alone.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-lt margin-auto md-text-center'>
              <div className='sm-container-spread md-text-center'>
                <div className='width-150 margin-left-auto margin-top-50px'>
                  <Image
                    src='/images/backgrounds/bg-02.png'
                    alt='job application autofill'
                    width='350'
                    height='780'
                  />
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 center-col text-lt margin-auto sm-margin-top-75px'>
              <div className='row feature-row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-lt margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: receiver; ratio: 1.5'
                  >
                    <img
                      src='/images/icons/filter-solid.svg'
                      width='30'
                      height='30'
                      className='margin-top-10px margin-left-10px padding-3px'
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-none'>
                    Cut Through the BS.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    Find the perfect position in less time using 9+ filters.
                  </p>
                </div>
              </div>

              <div className='row feature-row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-lt margin-bottom-75px sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: world; ratio: 1.2'
                  >
                    <img
                      src='/images/icons/database.png'
                      width='30'
                      height='30'
                      className='margin-top-10px margin-left-10px'
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-none'>
                    Save Your Jobs.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    Keep track of when and where you've applied and have peace
                    of mind in your search.
                  </p>
                </div>
              </div>
              <div className='row feature-row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-lt sm-text-center'>
                  <span
                    className='text-gray-dark bg-gold width-50px height-50px line-height-50 text-center border-radius-100'
                    data-uk-icon='icon: cog; ratio: 1.5'
                  >
                    <img
                      src='/images/icons/smile-solid.svg'
                      width='30'
                      height='30'
                      className='margin-top-10px margin-left-10px padding-3px'
                    />
                  </span>

                  <h6 className='text-gray-dark text-extra-large text-weight-700 margin-none'>
                    We Care.
                  </h6>

                  <p className='text-gray-dark no-margin md-text-center'>
                    Your time is precious. Spend more time doing the things that
                    matter.
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
