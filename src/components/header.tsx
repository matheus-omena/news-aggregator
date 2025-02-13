import { Newspaper } from '@phosphor-icons/react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4">
        <div className="flex items-center">
          <Newspaper size={40} className="mr-2" weight="light" />
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-bold tracking-widest text-slate-900">NEWS</span>
            <span className="text-xs font-semibold text-slate-700">AGGREGATOR</span>
          </div>
        </div>
      </div>
    </header>
  );
}
