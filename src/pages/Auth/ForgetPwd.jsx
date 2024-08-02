import React, {useRef, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { success } from "../../assets/icons";
import { reset } from "../../assets/images";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPwdForm from "./components/ForgetPwdForm";


const ForgetPwd = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

      const emailInputRef = useRef(null);

  const handleInputChange = (e) => {
   setEmail(e.target.value)
  };

  const navigate = useNavigate();
  const url = import.meta.env.VITE_APP_BASE_URL;

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      setIsLoading(true);
      setShowSuccess(true);
    }
    catch (error) {
        setShowError(true);
        emailInputRef.current.focus();
    }
  };

  return (
    <section className="flex">
      <div className=" md:w-1/2 hidden lg:block">
        <img src={reset} alt="forget password image" />
      </div>
      <div className="w-full md:w-1/2 mx-auto mt-[280px] md:mt-[150px] lg:m-0  flex flex-col justify-center px-[30px] lg:px-20 xl:px-[139px] pt-6 md:pt-8 pb-4 md:shadow-formShadow rounded-btnRadius">
        <div className=" ">
          <p className="text-basedark font-bold text-4xl">Password Reset</p>
          <p className="text-sm mt-2 mb-12 ">
            Don’t worry it happens to the best of us 🔐
          </p>
        </div>
        <ForgetPwdForm
          email={email}
          handleInputChange={handleInputChange}
          handleSignup={handlePasswordReset}
          isLoading={isLoading}
          emailInputRef={emailInputRef}
          showError={showError}
        />
        <div className="text-center ">
          <p className="text-textgray text-sm mb-10">
            Remember your password?{" "}
            <Link to={routes.LOGIN} className="text-primary font-semibold">
              Log in
            </Link>
          </p>

          {showSuccess && (
            <div className="bg-success p-4 text-white rounded-[4px] flex gap-4 items-start">
              <img src={success} alt="success" />
              <div className="">
                <p className="text-start">Success</p>

                <p className="text-start">
                  An email has been sent successfully to your registered email.
                  Click the link to reset your password
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForgetPwd;
