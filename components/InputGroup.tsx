
import React from 'react';
import { FormField } from '../types';

interface InputGroupProps {
  field: FormField;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ field, value, onChange }) => {
  const inputClasses = "w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:border-accent-gold focus:ring-1 focus:ring-accent-gold text-gray-900 transition-colors duration-200"; // Changed bg-dark-bg to bg-gray-100, border-gray-600 to border-gray-300, text-light-warm to text-gray-900

  return (
    <div className="mb-6">
      <label htmlFor={field.name} className="block text-light-warm text-lg font-semibold mb-2">
        {field.label} {field.required && <span className="text-primary-red">*</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.name}
          name={field.name}
          rows={5}
          className={`${inputClasses} resize-y`}
          placeholder={field.placeholder}
          value={value as string}
          onChange={onChange}
          required={field.required}
        ></textarea>
      ) : field.type === 'select' ? (
        <select
          id={field.name}
          name={field.name}
          className={`${inputClasses} appearance-none`}
          value={value as string}
          onChange={onChange}
          required={field.required}
        >
          {field.options?.map((option) => (
            <option key={option} value={option === '請選擇' ? '' : option} disabled={option === '請選擇'}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          className={inputClasses}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          required={field.required}
          min={field.type === 'number' ? 0 : undefined}
        />
      )}
    </div>
  );
};

export default InputGroup;