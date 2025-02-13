import { Filters } from './filters';
import { QuickSearch } from './filters/quick-search';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <QuickSearch />
        <Filters />
      </div>
    </header>
  );
}
