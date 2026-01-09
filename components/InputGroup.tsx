
import React from 'react';
import { FormField } from '../types';
import { CARD_BG, BORDER_COLOR, ACCENT_GOLD, TEXT_LIGHT, TEXT_SECONDARY, BRAND_RED } from '../constants'; // 引入新的顏色常量

interface InputGroupProps {
  field: FormField;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ field, value, onChange }) => {
  // 輸入框樣式調整為深色背景下的高對比
  const inputClasses = `w-full p-3 bg-card-bg border border-border-color rounded-md 
                        focus:border-accent-gold focus:ring-1 focus:ring-accent-gold 
                        text-text-light placeholder-text-secondary transition-colors duration-200`;

  return (
    <div className="mb-6">
      {/* Label 文字顏色調整 */}
      <label htmlFor={field.name} className={`block text-text-light text-lg font-semibold mb-2`}>
        {field.label} {field.required && <span className={`text-brand-red`}>*</span>} {/* 必填標記顏色調整 */}
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
            <option key={option} value={option === '請選擇預算區間' ? '' : option} disabled={option === '請選擇預算區間'}>
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