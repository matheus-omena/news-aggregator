import { Newspaper } from '@phosphor-icons/react';

export function Logo() {
  return (
    <div className="flex w-[130px] items-center">
      <Newspaper size={40} className="mr-2" weight="light" />
      <div className="flex flex-col -space-y-1">
        <span className="text-2xl font-bold tracking-widest text-slate-900">NEWS</span>
        <span className="text-xs font-semibold text-slate-700">AGGREGATOR</span>
      </div>
    </div>
  );
}
