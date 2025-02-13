import * as React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  className?: string;
  name: string;
  label?: string;
}

export function Input({ className, name, label, type, ...props }: InputProps) {
  return (
    <div className={className}>
      <label className="mb-2 text-xs font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-base transition-colors focus-visible:ring-1 focus-visible:outline-none md:text-sm"
        {...props}
      />
    </div>
  );
}
