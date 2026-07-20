import React from 'react'

function ThankYou() {
  return (
    <div>
<div>
  <header className="site-header" id="header">
    <h1 className="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
  </header>
  <div className="main-content">
    <i className="fa fa-check main-content__checkmark" id="checkmark" />
    <p className="main-content__body" data-lead-id="main-content-body">Form submitted successfully!<br />
      Check Your GTM Score!</p>
   
    <button
  onClick={() =>
    window.open(
      "https://docs.google.com/spreadsheets/d/15QGq_pGLbLBbnnBJqA7DXI0aNr5sdvF1gcePhsudsjc/edit?gid=531695745",
      "_blank"
    )
  }
>
  Click Here
</button>

  </div>
</div>


    

    </div>
  )
}

export default ThankYou
