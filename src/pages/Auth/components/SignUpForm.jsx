import React, { useState } from 'react';
import { Button } from '../../../components/elements';
import { Input } from '../../../components/section';
import { FaCheck } from "react-icons/fa";

const SignUpForm = ({formData, setFormData, handleInputChange, handleSignup, isLoading}) => {
    const [criteria, setCriteria] = useState({
      isMinLength: false,
      hasCapitalLetter: false,
      hasSymbol: false,
      hasNumber: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      setCriteria({
        isMinLength: value.length >= 8,
        hasCapitalLetter: /[A-Z]/.test(value),
        hasSymbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
        hasNumber: /\d/.test(value),
      });
    };
  return (
    <form className="flex flex-col gap-6">
      <div className=" flex  gap-6">
        <Input
          label={`First Name`}
          inputClass={`w-full`}
          labelClass={`text-[14px]`}
          name="firstname"
          onChange={handleInputChange}
          value={formData.firstname}
          type="text"
          required
        />
        <Input
          label={`Last Name`}
          inputClass={`w-full`}
          labelClass={`text-[14px]`}
          name="lastname"
          onChange={handleInputChange}
          value={formData.lastname}
          type="text"
          required
        />
      </div>
      {/* <Input
        label={`Organisation name`}
        labelClass={`text-[14px]`}
        name="organisationName"
        onChange={handleInputChange}
        value={formData.organisationName}
        type="text"
        required
      /> */}
      <Input
        label={`Email Address`}
        labelClass={`text-[14px]`}
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        required
      />
      <Input
        label={`Password`}
        labelClass={`text-[14px]`}
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <ul className="hidden">
        <li className="flex gap-2">
          {criteria.isMinLength ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          Minimum of 8 characters long
        </li>
        <li className="flex gap-2">
          {criteria.hasCapitalLetter ? (
            <FaCheck style={{ color: "green" }} />
          ) : null}{" "}
          At least one capital letter
        </li>
        <li className="flex gap-2">
          {criteria.hasSymbol ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          At least one symbol
        </li>
        <li className="flex gap-2">
          {criteria.hasNumber ? <FaCheck style={{ color: "green" }} /> : null}{" "}
          At least one number
        </li>
      </ul>

      <Button type={"submit"} className={`bg-primary py-4 font-semibold`}>
        Create an Account
      </Button>
    </form>
  );
}

export default SignUpForm