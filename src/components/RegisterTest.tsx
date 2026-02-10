"use client";

import { useState } from "react";
import { registrationSchema, RegistrationForm } from "@/lib/schemas";
import { FormInput } from "./FormInput";

// Vibe coded test component to test Supabase connection, will delete later
export default function RegisterTest() {
  // Form Data
  const [formData, setFormData] = useState<Partial<RegistrationForm>>({
    email: "",
    first_name: "",
    last_name: "",
    school: "",
  });

  // Form Errors
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Input Handler, updates every keystroke
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    // Zod registration schema check
    const validation = registrationSchema.safeParse(formData);
    if (!validation.success) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          email: "",
          first_name: "",
          last_name: "",
          school: "",
        });
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-center text-4xl font-bold text-gray-800">
        BigRed<span className="text-red-600">//</span>Hacks
      </h1>

      {isSuccess && (
        <div className="mb-4 rounded-md border border-green-300 bg-green-50 p-4 text-center text-green-700">
          Registration successful! Welcome aboard.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <FormInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          id="first_name"
          label="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <FormInput
          id="last_name"
          label="Last Name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <FormInput
          id="school"
          label="School"
          value={formData.school}
          onChange={handleChange}
        />

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}
