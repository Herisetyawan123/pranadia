import React from "react";

type InputProps = {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  value?: string;
  disable?: boolean;
};

function InputGroup({
  name,
  label,
  placeholder,
  id,
  type,
  value,
  disable,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
        placeholder={placeholder}
        disabled={disable}
      />
    </div>
  );
}

export default InputGroup;
