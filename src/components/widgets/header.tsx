import { Logo } from './logo';
import { Navbar } from './navbar';
import { DropMenu } from './drop-menu';

export const Header = () => {
  return (
    <header className="p-[12px] sm:p-[20px] w-full">
      <nav className="flex items-center justify-between mx-auto w-[760px] max-w-full">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-8">
          <Navbar />
          <DropMenu />
        </div>
      </nav>
    </header>
  );
};

