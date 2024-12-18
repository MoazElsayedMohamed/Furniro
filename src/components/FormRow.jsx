import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const FormRow = ({
  id,
  type,
  label,
  onChange,
  onClick,
  showPassword,
  placeholder,
  inputName,
  required,
  minLength,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xl text-gray-500 sm:max-phone:text-lg"
        >
          {label}
        </label>
        {id === "password" && (
          <div className="flex items-center gap-2">
            {showPassword ? (
              <IoMdEyeOff className="text-2xl" />
            ) : (
              <IoMdEye className="text-2xl" />
            )}
            <p
              className="text-xl text-gray-500 sm:max-phone:text-lg cursor-pointer"
              onClick={onClick}
            >
              {showPassword ? "hide" : "show"}
            </p>
          </div>
        )}
      </div>
      <input
        type={type}
        id={id}
        className="block h-16 border border-gray-300 w-full rounded-xl outline-none p-4 mt-4 mb-6 sm:max-phone:h-12 placeholder:text-xl "
        onChange={onChange}
        placeholder={placeholder}
        name={inputName}
        required={required}
        minLength={minLength}
      />
    </div>
  );
};

export default FormRow;
