import { FormEvent, Fragment, useState } from 'react'
import { BsCheckCircleFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { IoIosCloseCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { HStack, VStack } from 'src/app/common'
import { Loader } from 'src/app/components'
// import { useAuth } from 'src/app/routing'
import { useInput } from 'src/hooks'

export const Login = () => {
  // const { handleLogin } = useAuth()

  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [checkEmail, setCheckEmail] = useState(false)
  const [emailConfirmation, setEmailConfirmation] = useState(false)

  const { data, onChangeHandler } = useInput({
    name: '',
    email: '',
    confirmationEmail: '',
  })

  const resetInputs = () => {
    data.name = ''
    data.email = ''
    data.confirmationEmail = ''
  }

  const handleGoogleSignIn = (e: any, type: string) => {
    e.preventDefault()
  }

  const changeLoginSignup = (e: any) => {
    e.preventDefault()
    resetInputs()
    setShowLogin((prev) => !prev)
  }

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault()
    setBtnLoading(true)
  }

  const confirmEmail = (e: any, email: string) => {
    e.preventDefault()
  }

  return (
    <div className="login-page">
      <Helmet>
        <script type="text/javascript">
          {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "jb3ltwk15a");
            `}
        </script>
      </Helmet>
      <div className="login-nav">
        <div className="login-nav-logo">
          <img
            src="/assets/images/header-logo.svg"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="login-nav-items">
          <div
            className="login-nav-items-link"
            onClick={(e) => {
              changeLoginSignup(e)
              navigate(showLogin ? '/signup' : '/login')
            }}
          >
            {showLogin ? 'Sign Up' : 'Log In'}{' '}
          </div>
          <div
            className="login-nav-items-link"
            onClick={() => navigate('/faqs')}
          >
            FAQs
          </div>
          <div
            className="login-nav-items-link"
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSc_WRW1juO-QjVlPEbvgMdSA9E-8Mp8sPC3TvSxdK_gPw1KDQ/viewform?usp=pp_url&entry.72917710=LOGGED-OUT-USER',
                '_blank',
              )
            }
          >
            Contact Us
          </div>
          {/* <button
            className="login-nav-items-button"
            onClick={() =>
              window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSc_WRW1juO-QjVlPEbvgMdSA9E-8Mp8sPC3TvSxdK_gPw1KDQ/viewform',
                '_blank'
              )
            }
          >
            Contact Us
          </button> */}
        </div>
      </div>
      <div className="login-content">
        <div className="login-content-section">
          <div className="login-content-section-hero">
            <div className="hero">
              <div className="hero-icon">
                <img
                  src="/assets/images/ai-pdf.png"
                  onClick={() => navigate('/')}
                />
              </div>
              <div className="hero-title">
                All your
                <span className="highlight">AI PDF</span>
                files in one place
              </div>
              <div className="hero-info">
                <div className="hero-checkboxes">
                  <div className="hero-checkboxes-item">
                    <div className="checkbox-content">
                      <div className="checkbox-icon">
                        <BsFillCheckCircleFill />
                      </div>
                      <div className="checkbox-title">Multiple files</div>
                    </div>
                    <div className="checkbox-subtitle">
                      Upload multiple files and folders
                    </div>
                  </div>
                  <div className="hero-checkboxes-item">
                    <div className="checkbox-content">
                      <div className="checkbox-icon">
                        <BsFillCheckCircleFill />
                      </div>
                      <div className="checkbox-title">2GB per file</div>
                    </div>
                    <div className="checkbox-subtitle">
                      Supports up to <strong>2GB per file</strong>
                    </div>
                  </div>
                  <div className="hero-checkboxes-item">
                    <div className="checkbox-content">
                      <div className="checkbox-icon">
                        <BsFillCheckCircleFill />
                      </div>
                      <div className="checkbox-title">Lifetime storage</div>
                    </div>
                    <div className="checkbox-subtitle">
                      Keep files as long as you want
                    </div>
                  </div>
                  <div className="hero-checkboxes-item">
                    <div className="checkbox-content">
                      <div className="checkbox-icon">
                        <BsFillCheckCircleFill />
                      </div>
                      <div className="checkbox-title">
                        Search multiple files
                      </div>
                    </div>
                    <div className="checkbox-subtitle">
                      Coming soon: <strong>Search across multiple files</strong>
                    </div>
                  </div>
                </div>
                <div className="hero-info-icon">
                  <img src="/assets/images/microsoft-startups.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="login-content-section-entry">
            <div className="entry-container">
              <div className="entry-header">
                <div className="entry-title">
                  Upload files for free with AI Drive
                </div>
                <div className="entry-subtitle">
                  Trusted by 100,000+ happy users
                </div>
              </div>
              <form className="entry-content" onSubmit={handleEmailSignIn}>
                {showLogin ? (
                  <Fragment key="login">
                    <div
                      className="entry-google-button"
                      onClick={(e) => handleGoogleSignIn(e, 'Log In')}
                    >
                      <div className="google-icon">
                        <img src="/assets/images/google-icon.png" />
                      </div>
                      Log In with Google
                    </div>
                    <div className="entry-separator">OR</div>
                    <div className="entry-input-container">
                      <label className="entry-input-label">
                        Work Email address
                      </label>
                      <input
                        className="entry-input"
                        value={data.email}
                        onChange={onChangeHandler('email')}
                      />
                    </div>
                    <button
                      className={`entry-submit-button ${
                        btnLoading ? 'disabled' : ''
                      }`}
                      disabled={btnLoading}
                    >
                      {btnLoading ? (
                        <Loader variant="three" color="#fff" />
                      ) : (
                        'Log In'
                      )}
                    </button>
                  </Fragment>
                ) : (
                  <Fragment key="signup">
                    <div
                      className="entry-google-button"
                      onClick={(e) => handleGoogleSignIn(e, 'Sign Up')}
                    >
                      <div className="google-icon">
                        <img src="/assets/images/google-icon.png" />
                      </div>
                      Sign Up with Google
                    </div>
                    <div className="entry-separator">OR</div>
                    <div className="entry-input-container">
                      <label className="entry-input-label">Name</label>
                      <input
                        className="entry-input"
                        value={data.name}
                        onChange={onChangeHandler('name')}
                      />
                    </div>
                    <div className="entry-input-container">
                      <label className="entry-input-label">
                        Work Email address
                      </label>
                      <input
                        className="entry-input"
                        value={data.email}
                        onChange={onChangeHandler('email')}
                      />
                    </div>
                    <button
                      className={`entry-submit-button ${
                        btnLoading ? 'disabled' : ''
                      }`}
                      disabled={btnLoading}
                    >
                      {btnLoading ? (
                        <Loader variant="three" color="#fff" />
                      ) : (
                        'Sign Up'
                      )}
                    </button>
                  </Fragment>
                )}
                <div className="entry-content-footer">
                  By clicking one of the {showLogin ? `"log in"` : `"sign up"`}{' '}
                  buttons, you agree to our{' '}
                  <span
                    className="entry-highlight"
                    onClick={() => {
                      // window.open(
                      //   'https://myaidrive.com/static/terms_of_use.html',
                      //   '_blank'
                      // )
                      navigate('/terms')
                    }}
                  >
                    terms
                  </span>{' '}
                  and acknowledge our{' '}
                  <span
                    className="entry-highlight"
                    onClick={() => {
                      // window.open(
                      //   'https://myaidrive.com/static/privacy_policy.html',
                      //   '_blank'
                      // )
                      navigate('/privacy-policy')
                    }}
                  >
                    Privacy Policy
                  </span>
                  .
                </div>
              </form>
              <div className="entry-footer">
                <div className="entry-footer-title">
                  Trusted by{' '}
                  <strong>top universities &amp; 1,000+ businesses</strong>
                </div>
                <div className="entry-footer-images">
                  <img
                    className="entry-footer-image"
                    src="/assets/images/harvard.png"
                  />
                  <img
                    className="entry-footer-image"
                    src="/assets/images/stanford.png"
                  />
                  <img
                    className="entry-footer-image"
                    src="/assets/images/yale.png"
                  />
                  <img
                    className="entry-footer-image"
                    src="/assets/images/deloitte.png"
                  />
                </div>
              </div>
            </div>
            <div className="entry-background">
              <img src="/assets/images/pink-svg.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="login-info">
        <div className="login-info-title">
          Watch how <span className="login-info-highlight">Ai PDF</span> and AI
          Drive work together
        </div>
        <div className="login-info-video">
          <iframe
            className="login-info-video-iframe"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbjudlR7GoVg%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbjudlR7GoVg&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbjudlR7GoVg%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
            allowFullScreen={true}
            title="AI Drive"
            scrolling="no"
          />
        </div>
      </div>

      {/* <Modal visible={checkEmail} width="35vw">
        <VStack justify="center" className="login-page-check-email" gap="$5">
          <div className="login-page-check-email-close">
            <IoIosCloseCircle onClick={() => setCheckEmail(false)} />
          </div>
          <div className="login-page-check-email-heading">
            {showLogin
              ? 'Log in link sent to your email'
              : 'Sign up link sent to your email'}
          </div>
          <div className="login-page-check-email-content-list">
            <HStack
              align="center"
              gap="$4"
              className="login-page-check-email-content"
            >
              <BsCheckCircleFill
                className="login-page-check-email-content-icon"
                color="#e43636"
              />
              <span className="login-page-check-email-content-text">
                Go to your <span className="highlight">{data.email}</span>{' '}
                inbox.
              </span>
            </HStack>
            <HStack
              align="center"
              gap="$4"
              className="login-page-check-email-content"
            >
              <BsCheckCircleFill
                className="login-page-check-email-content-icon"
                color="#e43636"
              />
              <span className="login-page-check-email-content-text">
                Check your <strong>spam</strong> or <strong>junk</strong>{' '}
                folder.
              </span>
            </HStack>
            <HStack
              align="center"
              gap="$4"
              className="login-page-check-email-content"
            >
              <BsCheckCircleFill
                className="login-page-check-email-content-icon"
                color="#e43636"
              />
              <span className="login-page-check-email-content-text">
                Click the <span className="highlight">email link</span> to{' '}
                <strong>{showLogin ? 'Log In' : 'Sign Up'}</strong>.
              </span>
            </HStack>
          </div>
          <button
            className="entry-submit-button"
            onClick={() => {
              resetInputs()
              setCheckEmail(false)
            }}
          >
            Okay
          </button>
        </VStack>
      </Modal>

      <Modal visible={emailConfirmation} width="30vw">
        <form
          className="login-page-confirmation"
          onSubmit={(e) => confirmEmail(e, data.confirmationEmail)}
        >
          <div className="login-page-confirmation-close">
            <IoIosCloseCircle onClick={() => setEmailConfirmation(false)} />
          </div>
          <div className="login-page-confirmation-heading">
            Email Confirmation
          </div>

          <div className="login-page-confirmation-input-container">
            <div className="login-page-confirmation-label">
              Confirm email address
            </div>
            <input
              className="login-page-confirmation-input"
              onChange={onChangeHandler('confirmationEmail')}
            />
          </div>

          <button className="entry-submit-button" type="submit">
            Submit
          </button>
        </form>
      </Modal> */}
    </div>
  )
}
