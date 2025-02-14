import * as React from 'react';

interface CheckboxProps extends React.ComponentProps<'input'> {
  className?: string;
  name: string;
  label?: string;
}

export function Checkbox({ className, name, label, ...props }: CheckboxProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={name}
        type="checkbox"
        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-slate-900 focus:ring-2 focus:ring-slate-900"
        {...props}
      />
      <label htmlFor={name} className="ml-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
}
