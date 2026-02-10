"use client";

import { useState } from "react";
import type { FormConfig, FormField } from "@/lib/formConfig";
import TextInput from "./form-fields/TextInput";
import Dropdown from "./form-fields/Dropdown";
import RadioGroup from "./form-fields/RadioGroup";
import Checkbox from "./form-fields/Checkbox";
import CheckboxGroup from "./form-fields/CheckboxGroup";
import FileUpload from "./form-fields/FileUpload";
import MultipleChoiceGrid from "./form-fields/MultipleChoiceGrid";
import PreferenceGrid from "./form-fields/PreferenceGrid";

interface DynamicFormProps {
  config: FormConfig;
  onSubmit: (data: Record<string, any>) => void | Promise<void>;
  isLoading?: boolean;
}

export default function DynamicForm({ config, onSubmit, isLoading = false }: DynamicFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    config.fields.forEach((field) => {
      if (field.required) {
        const value = formData[field.id];

        if (field.type === "checkboxGroup" || field.type === "multipleChoiceGrid" || field.type === "preferenceGrid") {
          if (!value || (Array.isArray(value) && value.length === 0) || (typeof value === "object" && Object.keys(value).length === 0)) {
            newErrors[field.id] = `${field.label} is required`;
          }
          // For grid fields, check all rows are filled
          if (field.type === "multipleChoiceGrid" || field.type === "preferenceGrid") {
            const rows = field.rows;
            const missingRows = rows.filter(row => !value || !value[row]);
            if (missingRows.length > 0) {
              newErrors[field.id] = `Please select an option for all rows`;
            }
          }
        } else if (!value || (typeof value === "string" && value.trim() === "")) {
          newErrors[field.id] = `${field.label} is required`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      field,
      error: errors[field.id],
    };

    switch (field.type) {
      case "text":
      case "email":
        return (
          <TextInput
            {...commonProps}
            field={field}
            value={formData[field.id] || ""}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "dropdown":
        return (
          <Dropdown
            {...commonProps}
            field={field}
            value={formData[field.id] || ""}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "radio":
        return (
          <RadioGroup
            {...commonProps}
            field={field}
            value={formData[field.id] || ""}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            {...commonProps}
            field={field}
            value={formData[field.id] || false}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "checkboxGroup":
        return (
          <CheckboxGroup
            {...commonProps}
            field={field}
            value={formData[field.id] || []}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "file":
        return (
          <FileUpload
            {...commonProps}
            field={field}
            value={formData[field.id] || null}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "multipleChoiceGrid":
        return (
          <MultipleChoiceGrid
            {...commonProps}
            field={field}
            value={formData[field.id] || {}}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      case "preferenceGrid":
        return (
          <PreferenceGrid
            {...commonProps}
            field={field}
            value={formData[field.id] || {}}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          BigRed<span className="text-red-600">//</span>Hacks
        </h1>
        {config.title && (
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">{config.title}</h2>
        )}
        {config.description && (
          <p className="mt-2 text-gray-600">{config.description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {config.fields.map((field) => (
          <div key={field.id}>{renderField(field)}</div>
        ))}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400 transition-colors"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
