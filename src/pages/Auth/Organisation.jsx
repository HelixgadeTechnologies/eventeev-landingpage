import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { google } from "../../assets/icons";
import { organisation } from "../../assets/images";
import Layout from "../../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpForm from "./components/SignUpForm";
import OrganisationForm from "./components/OrganisationForm";

const Organisation = () => {
  const [formData, setFormData] = useState({
    organisationName: "",
    organisationWebsite: "",
    organisationIndustry: "",
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

  const handleOrganisationReg = async (e) => {
    e.preventDefault();

    const data = {
      organisationName: formData.organisationName,
      organisationWebsite: formData.organisationWebsite,
      organisationIndustry: formData.organisationIndustry,
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
      <div className="w-full hidden md:block  ">
        <img
          src={organisation}
          alt="image"
          className=" md:h-[500px] w-full lg:h-screen"
        />
      </div>
      <div className="w-full px-8 py-10 place-self-center xl:px-[130px] xl:py-[120px] lg:px-10 lg:py-10 ">
        <div className="pb-8">
        <h3 className="text-[#1B1818] font-semibold text-4xl mb-2">
          Organisation details!
        </h3>
        <p className=" text-[#645D5D] text-sm">
          Please tell us about your organisation
        </p>

        </div>
        <OrganisationForm
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleOrganisationReg={handleOrganisationReg}
          isLoading={isLoading}
        />
        <div className="text-center ">
          <p className="text-textgray text-sm my-7">
            Back to{" "}
            <Link to={routes.SIGN_UP} className="text-primary font-semibold">
              Registration
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Organisation;
