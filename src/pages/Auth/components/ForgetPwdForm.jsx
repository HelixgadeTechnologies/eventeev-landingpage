import React, { useState } from "react";
import { Button } from "../../../components/elements";
import {Input } from "../../../components/section";
import { error } from "../../../assets/icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const ForgetPwdForm = ({
  email,
  handleInputChange,
  handlePasswordReset,
  isLoading,
  emailInputRef,
  showError,
}) => {
  return (
    <form className="flex flex-col">
      <Input
        label={`Email Address`}
        labelClass={`text-[14px]`}
        name="email"
        onChange={handleInputChange}
        value={email}
        ref={emailInputRef}
        coverClass={showError ? "border-red-500 bg-red-100" : ""}
        type="email"
        placeholder="Enter your email address"
        required
      />

      {showError && (
        <p className="text-danger text-sm flex gap-2">
          <img src={error} alt="error" className="w-6 h-6" /> This email is not
          registered in our database😢
        </p>
      )}

      <Button type={"submit"} className={`bg-primary py-4 mt-6 mb-9 font-semibold`}>
        Send Link
      </Button>
    </form>
  );
};

export default ForgetPwdForm;
