import React from 'react'

const Mentor = () => {
  return (
    <div>
      <h1>What do you want to do?</h1>
      <p>Choose an option:</p>
      <button onClick={() => window.location.href = '/mentor_personal_info_check'}>
        See Personal Information
      </button>
      <button onClick={() => window.location.href = '/mentor_academics_info_check'}>
       See Academics
      </button>
      <button onClick={() => window.location.href = '/personalinfo'}>
       Add Personal Info
      </button>
      <button onClick={() => window.location.href = '/academicsinfo'}>
       Add Academics Info
      </button>
      <p>contact student via Email</p>
      <button onClick={()=>window.location.href='/Email'}>email</button>
    </div>
  );
}

export default Mentor;
