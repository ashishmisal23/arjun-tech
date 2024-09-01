import React from 'react';
import '../Style/error.css';

const ErrorMsg = ({ errorCode = "404", errorMessage = "Not Found" }) => {
  return (
    <section className="error-section primary-bg-color container" id="error-msg" role="alert">
      <header className="error-header">
        <h1 className='large-heading'>Oops! An Error Occurred</h1>
        <h2 className='third-large-heading'>The server returned a "{errorCode} {errorMessage}".</h2>
      </header>
      <main className='error-content'>
        <p className='md-para'>
          Something is broken. Please let us know what you were doing when this error occurred.
          We will fix it as soon as possible. Sorry for any inconvenience caused.
        </p>
      </main>
    </section>
  );
}

export default ErrorMsg;
/*import React from 'react';
import '../Style/error.css';



const ErrorMsg = () => {
  return (
    <section className="primary-bg-color container" id="error-msg">
      <div className="error">
        <h1 className='large-heading'>Oops! An Error Occurred</h1>
        <h1 className='third-large-heading'>The server returned a "404 Not Found".</h1>
        <p className='md-para'>Something is broken. Please let us know what you were doing when this error occurred.
          We will fix it as soon as possible. Sorry for any inconvenience caused.</p>
      </div>


    </section>


  )
}

export default ErrorMsg */