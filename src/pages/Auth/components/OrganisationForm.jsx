import React, { useState } from "react";
import { Button } from "../../../components/elements";
import { Input } from "../../../components/section";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const OrganisationForm = ({
  formData,
  setFormData,
  handleInputChange,
  handleOrganisationReg,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      rememberMe: e.target.checked,
    });
  };

  return (
    <form onSubmit={handleOrganisationReg} className="flex flex-col ">
      <Input
        label={`Organisation Name`}
        labelClass={`text-sm`}
        name="organisationName"
        onChange={handleInputChange}
        value={formData.organisationName}
        type="text"
        // placeholder="Enter your email address"
        required
      />
      <Input
        label={`Organisation Website`}
        inputClass={`mt-6`}
        labelClass={`text-sm`}
        name="organisationWebsite"
        type={`text`}
        value={formData.organisationWebsite}
        onChange={handleInputChange}
        // placeholder="Enter your password"
        
      />
      <Input
        label={`Organisation Industry`}
        inputClass={`mt-6`}
        labelClass={`text-sm`}
        name="organisationIndustry"
        type={`text`}
        value={formData.organisationIndustry}
        onChange={handleInputChange}
        // placeholder="Enter your password"
        
      />
        

    

      <Button type={"submit"} className={`bg-primary mt-8 py-4 font-semibold`}>
        Proceed
      </Button>
    </form>
  );
};

export default OrganisationForm;
