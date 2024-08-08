import React from 'react'
import { Button } from '../../components/elements';
import { logo } from '../../assets/icons';

const VerifyAcct = () => {
     const handleEmailClick = () => {
       window.location.href = "mailto:";
     };
  return (
    <section className="bg-black flex flex-col justify-center items-center px-10 h-screen">
      <img src={logo} alt="company-logo" />
      <div className="bg-white text-[#1B1818] py-10 px-8 text-center mt-10 md:mt20 lg:mt-44 rounded-2xl">
        <h2 className="text-2xl mb-1">Verify your email</h2>
        <p
          className="text-sm text-[#645D5D] md:w-[462px]">
          We sent a mail to your email address, click on the link to verify your
          account
        </p>
        <Button
          onClick={handleEmailClick}
          className={`py-4 font-semibold mt-8 w-full`}
        >
          Open email
        </Button>
      </div>
    </section>
  );
}

export default VerifyAcct