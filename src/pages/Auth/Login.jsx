import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google, logo } from "../../assets/icons";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInForm from "./components/SignInForm";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const url = import.meta.env.VITE_APP_BASE_URL;

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
      password: formData.password,
    };

   
  };

  return (
    <section className="flex flex-col justify-center w-full items-center">
      <div className="grid justify-center mt-[70px] md:mt-[106px] w-full pb-[19px] ">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-full md:max-w-[500px] px-8 pt-10 pb-6 md:shadow-formShadow rounded-btnRadius">
        <div className="text-center  pb-8">
          <h5 className="text-2xl mb-">Sign in</h5>
          <p className="text-sm">
            Enter your credentials to access your account
          </p>
        </div>
        <p className="font-semibold flex gap-2 w-full border border-[#D0D5DD]  justify-center items-center py-4 rounded-btnRadius">
          <img src={google} alt="google-icon" />
          Continue with Google
        </p>
        <div className="flex justify-between items-center my-4">
          <div className="border w-full border-[#D0D5DD]"></div>
          <p className="px-2 text-[#667185]">OR</p>
          <div className="border w-full border-[#D0D5DD]"></div>
        </div>
        <SignInForm
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleSignup={handleSignup}
          isLoading={isLoading}
        />
      </div>
      <div className="text-center bg-white rounded-[30px] shadow-btnShadow my-7">
        <p className="text-[#514A4A] text-sm py-4 px-7">
          Don’t have an account?{" "}
          <Link to={routes.SIGN_UP} className="text-primary font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
