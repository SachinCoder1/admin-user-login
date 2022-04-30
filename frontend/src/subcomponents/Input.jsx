import React from "react";

function Input({ name, type = "text", placeholder, label, value, onChange }) {
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow outline-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
