import React, { useState } from "react";

const FormField = ({
  label,
  id,
  surpriseMe,
  name,
  placeholder,
  handleSurpriseMe,
  handleChange,
  value,
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
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
