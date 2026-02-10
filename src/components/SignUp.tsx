"use client";

import React, { useState } from "react";
import TextInput from "./form-fields/TextInput"; 
import { TextFormField, EmailFormField } from "@/lib/formConfig";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fields: (TextFormField | EmailFormField)[] = [
    { id: "firstName", label: "First Name", type: "text", required: true, placeholder: "First Name" },
    { id: "lastName", label: "Last Name", type: "text", required: true, placeholder: "Last Name" },
    { id: "email", label: "Email", type: "email", required: true, placeholder: "Email" },
    { id: "password", label: "Password", type: "text", required: true, placeholder: "Password" }, 
    { id: "confirmPassword", label: "Confirm Password", type: "text", required: true, placeholder: "Password" },
  ];

  return (
    <div className="min-h-screen bg-[#f15a5a] flex items-center justify-center p-4">
      <div className="bg-[#fff9f2] rounded-2xl p-8 w-full max-w-[450px] shadow-xl flex flex-col items-center">
        

        <div className="flex flex-col items-center mb-6">
          <img 
            src="src/assets/brh-logo-with-text.png" 
            alt="Big Red Hacks Logo" 
            className="h-16 mb-2"
          />
          <h1 className="text-[#8b2323] text-xl font-medium">Create New Account</h1>
        </div>

   
        <div className="w-full space-y-1">
          {fields.map((field) => (
            <TextInput
              key={field.id}
              field={field}
              value={(formData as any)[field.id]}
              onChange={(val) => handleChange(field.id, val)}
            />
          ))}
        </div>

      
        <button className="w-full bg-[#ff2e4d] text-white py-3 rounded-lg font-bold mt-6 hover:bg-[#e02844] transition-colors">
          Create Account
        </button>

 
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>

      
        <div className="w-full mt-6 space-y-3">
          <button className="w-full border border-gray-300 bg-white flex items-center justify-center py-2.5 rounded-lg gap-3 hover:bg-gray-50 transition-colors">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-5 h-5" />
            <span className="font-semibold text-sm">Sign Up with GitHub</span>
          </button>
          
          <button className="w-full border border-gray-300 bg-white flex items-center justify-center py-2.5 rounded-lg gap-3 hover:bg-gray-50 transition-colors">
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5" />
            <span className="font-semibold text-sm">Sign Up with Google</span>
          </button>
        </div>

      </div>
    </div>
  );
}