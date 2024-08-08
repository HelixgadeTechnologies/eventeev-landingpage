import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google } from "../../assets/icons";
import { banner} from "../../assets/images";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./components/SignUpForm";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    organisationName: "",
    email: "",
    password: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
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
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        password: formData.password,
        organisationName: formData.organisationName,
      };

      try {
        setIsLoading(true);
        const response = await axios.post(`${url}/api/v1/users/signup`, data);

        if (response.status === 201) {
          toast.success("Registration successful!");
          localStorage.setItem("userData", response.data);
          setIsLoading(false);
          navigate("/");
        } else {
          toast.error("Registration failed.");
        }
      } catch (error) {
        toast.error("Registration failed.");
      }
  };

  return (
    <section className="flex flex-col lg:flex-row lg:h-screen  ">
      <div className="bg-signup bg-cover bg-no-repeat bg-center hidden px-10 pt-10 lg:px-20  text-white w-full md:flex flex-col justify-center items-center  ">
        <div className="lg:w-[572px]">
        <h4 className=" font-bold  text-5xl lg:text-6xl">
          Elevate your Event workflow with Eventeev
        </h4>
        <p className="text-lg mt-2 mb-8 lg:w-[420px]">
          Our comprehensive Event platform offers you an unparalleled range of
          event component, sparking creativity and boosting efficiency.
        </p>

        </div>
      </div>
      <div className="w-full px-8 py-10 xl:px-[130px] xl:py-[120px] lg:px-10 lg:py-10 md:shadow-formShadow  rounded-btnRadius">
        <h3 className="text-[#1B1818] font-semibold text-4xl mb-10">
          Sign up!
        </h3>
        <SignUpForm
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleSignup={handleSignup}
          isLoading={isLoading}
        />
        <div className="text-center ">
          <p className="text-textgray text-sm my-7">
            Already have an account?{" "}
            <Link to={routes.LOGIN} className="text-primary font-semibold">
              Log in
            </Link>
          </p>
          <div className="flex justify-between items-center mb-6">
            <div className="border w-full border-[#D0D5DD]"></div>
            <p className="px-2 text-[#667185]">OR</p>
            <div className="border w-full border-[#D0D5DD]"></div>
          </div>
          <p className="font-semibold flex gap-2 w-full border border-[#D0D5DD]  justify-center items-center py-4 rounded-btnRadius">
            <img src={google} alt="google-icon" />
            Continue with Google
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
