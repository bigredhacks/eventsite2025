"use client";

import type { TextFormField, EmailFormField } from "@/lib/formConfig";

interface TextInputProps {
  field: TextFormField | EmailFormField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function TextInput({ field, value, onChange, error }: TextInputProps) {
  return (
    <div className="flex flex-col gap-2.5 items-start bg-white px-6 py-6 rounded-lg w-full">
      <div className="flex gap-1 items-center w-full">
        <label htmlFor={field.id} className="text-sm font-normal text-black leading-[1.5]">
          {field.label}
        </label>
        {field.required && (
          <span className="text-[#fe1736] text-[15px] leading-[normal]">*</span>
        )}
      </div>
      {field.description && (
        <p className="text-xs text-gray-600">{field.description}</p>
      )}
      <div className="border-b border-[#d6d3cf] w-full">
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder || ""}
          required={field.required}
          className="w-full px-0 py-2.5 text-sm text-black placeholder:text-[#d6d3cf] focus:outline-none bg-transparent"
        />
      </div>
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
