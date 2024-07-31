import React, { useState, useEffect } from "react";
import {helixgade, gdg, gogle, olotu, fed} from '../../assets/icons'

const logos = [
  { src: helixgade, alt: "Helixgade" },
  { src: gdg, alt: "GDG Port Harcourt" },
  { src: gogle, alt: "Google" },
  { src: olotu, alt: "Olotu Square" },
  { src: fed, alt: "FedEx" },
];

const Partners = () => {


  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-x-16 md:flex-row md:flex-nowrap justify-center items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-32 md:w-40 my-2 md:my-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
