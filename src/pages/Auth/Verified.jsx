import React from "react";
import { useNavigate} from "react-router-dom"
import routes from "../../router/routes";
import { Button } from "../../components/elements";
import { logo } from "../../assets/icons";

const Verified = () => {
      const navigate = useNavigate();
  const handleClick = () => {
    navigate(routes.DASHBOARD)
  };
  return (
    <section className="bg-black flex flex-col justify-center items-center px-10 h-screen">
      <img src={logo} alt="company-logo" />
      <div className="bg-white text-[#1B1818] py-10 px-8 text-center mt-10 md:mt20 lg:mt-44 rounded-2xl">
        <h2 className="text-2xl mb-1">Verified</h2>
        <p className="text-sm text-[#645D5D] md:w-[462px]">
          You have successfully verified your account
        </p>
        <Button onClick={handleClick} className={`py-4 font-semibold mt-8 w-full`}>
          Proceed to dashboard
        </Button>
      </div>
    </section>
  );
};

export default Verified;
