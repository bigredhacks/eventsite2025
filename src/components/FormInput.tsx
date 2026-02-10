"use client";

import type { RegistrationForm } from "@/lib/schemas";

interface FormInputProps {
  id: keyof RegistrationForm;
  label: string;
  type?: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} *
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500"
      required
    />
  </div>
);
