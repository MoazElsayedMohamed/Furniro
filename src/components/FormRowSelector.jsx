import React from "react";

const FormRowSelector = ({ id, label, option }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xl text-gray-500 sm:max-phone:text-lg"
      >
        {label}
      </label>
      <select className="block  h-16 border border-gray-300 rounded-xl outline-none text-xl mt-4 mb-6 capitalize p-4 sm:max-phone:h-12 w-full text-gray-500">
        <option value="">{option}</option>
      </select>
    </div>
  );
};

export default FormRowSelector;
