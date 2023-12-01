import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsSearch } from "react-icons/bs";
const FormField = ({
  label,
  id,
  surpriseMe,
  name,
  placeholder,
  handleSurpriseMe,
  handleChange,
  value,
  className,
  type = "text",
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">
          {label}
        </label>

        {surpriseMe ? (
          <button
            onClick={handleSurpriseMe}
            type="button"
            className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        ) : null}
      </div>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={twMerge(
            "bg-transparent border-b-2    border-gray-300  text-sm  focus:ring-0 focus:border-primary outline-none block w-full p-3 placeholder:text-gray-300",
            className
          )}
          value={value}
          onChange={handleChange}
          required
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-6">
          <BsSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default FormField;
