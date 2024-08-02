import React, { useState } from "react";
import { Button } from "../../../components/elements";
import { Input } from "../../../components/section";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const SignUpForm = ({
  formData,
  setFormData,
  handleInputChange,
  handleLogin,
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
    <form className="flex flex-col ">
      <Input
        label={`Email Address`}
        labelClass={`text-sm`}
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        placeholder="Enter your email address"
        required
      />
      <Input
        label={`Password`}
        inputClass={`mt-6`}
        labelClass={`text-sm`}
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        required
      >
        <button onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </Input>

      <div className="my-8 flex flex-col md:flex-row justify-between md:items-center">

      <div>
        <label className="flex items-center text-sm whitespace-nowrap ">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe || false}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          Remember me for 30 days
        </label>
      </div>
      <Link
        to={routes.FORGOT_PASSWORD}
        className="w-full text-xs text-right text-primary font-semibold "
      >
        Forgot Password?
      </Link>
      </div>


      <Button type={"submit"} className={`bg-primary py-4 font-semibold`}>
        Sign In
      </Button>
    </form>
  );
};

export default SignUpForm;
