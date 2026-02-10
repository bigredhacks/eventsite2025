"use client";

import { useState, useRef, useEffect } from "react";
import type { DropdownFormField } from "@/lib/formConfig";

interface DropdownProps {
  field: DropdownFormField;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const dropdownIcon = "https://www.figma.com/api/mcp/asset/e5a48a22-bd51-40d7-bc6d-358e2a06b7e2";

export default function Dropdown({ field, value, onChange, error }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div className="relative w-[150px]" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border border-[#636363] rounded-lg px-3 py-2.5 w-full flex items-center justify-between text-sm"
        >
          <span className={value ? "text-black" : "text-[#d6d3cf]"}>
            {value || "Select"}
          </span>
          <img
            src={dropdownIcon}
            alt=""
            className="w-[12.8px] h-[8px]"
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-[#636363] rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {field.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
