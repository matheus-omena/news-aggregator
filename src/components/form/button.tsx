interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isOutline?: boolean;
}

export function Button({ text, isOutline, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full cursor-pointer rounded-full border border-slate-800 py-2 text-sm font-medium transition-all hover:font-bold ${isOutline ? 'bg-transparent text-slate-800' : 'bg-slate-800 text-white'}`}
      {...props}
    >
      {text}
    </button>
  );
}
